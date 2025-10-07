const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const run = (command) => {
  execSync(command, {
    stdio: 'inherit',
    env: process.env,
  });
};

run('next build');

const hasAppDirectory = fs.existsSync('app') || fs.existsSync(path.join('src', 'app'));
const shouldSkipExport = hasAppDirectory || process.env.SKIP_NEXT_EXPORT === 'true';

const ensureRouteGroupClientManifests = () => {
  const appRoot = fs.existsSync('app') ? 'app' : fs.existsSync(path.join('src', 'app')) ? path.join('src', 'app') : null;
  if (!appRoot) {
    return;
  }

  const routeGroupPaths = [];
  const walk = (currentDir, relativePath = '') => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const nextRelative = path.join(relativePath, entry.name);
      const nextDir = path.join(currentDir, entry.name);
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
        routeGroupPaths.push(nextRelative);
      }

      walk(nextDir, nextRelative);
    }
  };

  walk(appRoot);

  if (routeGroupPaths.length === 0) {
    return;
  }

  const serverAppDir = path.join('.next', 'server', 'app');
  const manifestSource = path.join(serverAppDir, 'page_client-reference-manifest.js');

  if (!fs.existsSync(manifestSource)) {
    return;
  }

  for (const routeGroup of routeGroupPaths) {
    const targetDir = path.join(serverAppDir, routeGroup);
    const manifestDestination = path.join(targetDir, 'page_client-reference-manifest.js');

    if (fs.existsSync(manifestDestination)) {
      continue;
    }

    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(manifestSource, manifestDestination);
    console.log(
      `Copied client reference manifest for route group "${routeGroup}" to ensure Vercel build compatibility.`,
    );
  }
};

ensureRouteGroupClientManifests();

if (shouldSkipExport) {
  console.log('\nSkipping `next export` because the App Router is enabled or export was explicitly disabled.');
  process.exit(0);
}

console.log('\nRunning `next export` to generate the static output directory.');
run('next export');

const manifestSource = path.join('.next', 'routes-manifest.json');
const manifestDestination = path.join('out', 'routes-manifest.json');

if (!fs.existsSync(manifestDestination) && fs.existsSync(manifestSource)) {
  fs.copyFileSync(manifestSource, manifestDestination);
  console.log('Copied `.next/routes-manifest.json` to `out/routes-manifest.json` for Vercel compatibility.');
}

if (fs.existsSync(manifestDestination)) {
  console.log('\nStatic export complete. Files (including routes-manifest.json) are available in the `out` directory.');
} else {
  console.warn('\nWarning: `routes-manifest.json` was not found after export.');
}
