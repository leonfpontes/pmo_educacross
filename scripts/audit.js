const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const TARGET_DIRS = [path.join(ROOT, 'src'), path.join(ROOT, 'pages'), path.join(ROOT, 'styles')];
const OUTPUT_DIR = path.join(ROOT, 'docs', 'audit');

const FILE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css']);
const MIN_WINDOW_LINES = 10;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      if (entry.isFile() && FILE_EXTENSIONS.has(path.extname(entry.name))) {
        return [fullPath];
      }
      return [];
    })
    .sort();
}

function buildDuplicateIndex(filePaths) {
  const duplicateIndex = new Map();

  filePaths.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    for (let i = 0; i <= lines.length - MIN_WINDOW_LINES; i += 1) {
      const windowLines = lines.slice(i, i + MIN_WINDOW_LINES);
      const normalized = windowLines.map((line) => line.trim()).join('\n');
      const nonEmpty = windowLines.some((line) => line.trim().length > 0);
      if (!nonEmpty) continue;

      const hash = crypto.createHash('md5').update(normalized).digest('hex');
      if (!duplicateIndex.has(hash)) {
        duplicateIndex.set(hash, []);
      }
      duplicateIndex.get(hash).push({
        file: path.relative(ROOT, filePath),
        startLine: i + 1,
        endLine: i + MIN_WINDOW_LINES,
        snippet: normalized.split('\n').slice(0, 5).join(' '),
      });
    }
  });

  return Array.from(duplicateIndex.entries())
    .filter(([, occurrences]) => occurrences.length > 1)
    .map(([hash, occurrences]) => ({ hash, occurrences }));
}

function detectInlineStyles(content) {
  const matches = [];
  const regex = /style\s*=\s*\{/g;
  let match;
  while ((match = regex.exec(content))) {
    matches.push({ index: match.index });
  }
  return matches.length;
}

function detectGodComponents(content) {
  return content.split(/\r?\n/).length;
}

function detectPatterns(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(ROOT, filePath);
  const inlineStyles = detectInlineStyles(content);
  const totalLines = detectGodComponents(content);
  const mentions = [];

  if (inlineStyles > 0) {
    mentions.push({ type: 'inline-style', occurrences: inlineStyles });
  }

  if (totalLines > 260) {
    mentions.push({ type: 'large-file', lines: totalLines });
  }

  if (/document\./.test(content) || /window\./.test(content)) {
    mentions.push({ type: 'direct-dom-access' });
  }

  if (/fetch\(/.test(content) && relativePath.startsWith('pages/')) {
    mentions.push({ type: 'client-fetch' });
  }

  if (/dangerouslySetInnerHTML/.test(content)) {
    mentions.push({ type: 'dangerous-html' });
  }

  return mentions.length > 0 ? { file: relativePath, issues: mentions } : null;
}

function detectComponentCandidates(filePath) {
  const basename = path.basename(filePath).toLowerCase();
  const nameMatches = [
    'header',
    'footer',
    'navbar',
    'card',
    'modal',
    'table',
    'form',
    'empty',
    'error',
    'breadcrumb',
    'pagination',
    'badge',
    'toast',
  ];

  if (nameMatches.some((name) => basename.includes(name))) {
    return path.relative(ROOT, filePath);
  }

  const content = fs.readFileSync(filePath, 'utf8').toLowerCase();
  if (/aria-/.test(content) || /role="dialog"/.test(content)) {
    return path.relative(ROOT, filePath);
  }

  return null;
}

function main() {
  const filePaths = TARGET_DIRS.flatMap((dir) => (fs.existsSync(dir) ? walk(dir) : []));
  const duplicates = buildDuplicateIndex(filePaths);
  const antiPatterns = filePaths
    .map(detectPatterns)
    .filter(Boolean)
    .sort((a, b) => a.file.localeCompare(b.file));
  const componentCandidates = filePaths
    .map(detectComponentCandidates)
    .filter(Boolean)
    .sort();

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalFiles: filePaths.length,
      duplicateGroups: duplicates.length,
      antiPatternFiles: antiPatterns.length,
      componentCandidateCount: componentCandidates.length,
    },
    duplicates,
    antiPatterns,
    componentCandidates,
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.json'), JSON.stringify(report, null, 2));

  const markdown = [
    '# Relatório de Auditoria',
    '',
    `- Data: ${report.generatedAt}`,
    `- Total de arquivos analisados: ${report.summary.totalFiles}`,
    `- Grupos de duplicações: ${report.summary.duplicateGroups}`,
    `- Arquivos com anti-padrões: ${report.summary.antiPatternFiles}`,
    `- Candidatos a componentes: ${report.summary.componentCandidateCount}`,
    '',
    '## Duplicações (trechos de 10 linhas)',
  ];

  if (duplicates.length === 0) {
    markdown.push('- Nenhuma duplicação relevante encontrada.');
  } else {
    duplicates.slice(0, 20).forEach((dup) => {
      markdown.push(`- Hash: \`${dup.hash}\``);
      dup.occurrences.forEach((occ) => {
        markdown.push(
          `  - ${occ.file} (L${occ.startLine}-L${occ.endLine}) — Trecho: \`${occ.snippet.slice(0, 120)}\``
        );
      });
    });
  }

  markdown.push('', '## Anti-padrões detectados');

  if (antiPatterns.length === 0) {
    markdown.push('- Nenhum anti-padrão automatizado identificado.');
  } else {
    antiPatterns.forEach((entry) => {
      const issues = entry.issues
        .map((issue) => {
          if (issue.type === 'inline-style') {
            return `estilos inline (${issue.occurrences})`;
          }
          if (issue.type === 'large-file') {
            return `arquivo extenso (${issue.lines} linhas)`;
          }
          if (issue.type === 'direct-dom-access') {
            return 'acesso direto ao DOM';
          }
          if (issue.type === 'client-fetch') {
            return 'fetch no cliente';
          }
          if (issue.type === 'dangerous-html') {
            return 'uso de dangerouslySetInnerHTML';
          }
          return issue.type;
        })
        .join(', ');
      markdown.push(`- ${entry.file}: ${issues}`);
    });
  }

  markdown.push('', '## Candidatos a Componentes Identificados');

  if (componentCandidates.length === 0) {
    markdown.push('- Nenhum candidato óbvio detectado automaticamente.');
  } else {
    componentCandidates.forEach((candidate) => {
      markdown.push(`- ${candidate}`);
    });
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.md'), `${markdown.join('\n')}\n`);
}

if (require.main === module) {
  main();
}
