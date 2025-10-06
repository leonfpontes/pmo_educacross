#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const run = (command) => {
  execSync(command, { stdio: 'inherit', cwd: projectRoot });
};

const tryPrettier = () => {
  try {
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    require.resolve('prettier');
  } catch (error) {
    return false;
  }

  run('npx prettier --write "**/*.{js,jsx,ts,tsx,css,json,md}"');
  return true;
};

const formattedWithPrettier = tryPrettier();

if (!formattedWithPrettier) {
  console.warn('\n[format] Prettier não está instalado. Executando `next lint --fix` como fallback.');
  try {
    run('npx next lint --fix');
  } catch (error) {
    console.error('[format] Falha ao executar fallback de lintagem automática.', error);
    process.exit(1);
  }
}
