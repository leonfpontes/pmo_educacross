#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  execSync('git config core.hooksPath .husky', { stdio: 'inherit' });
  console.log('Hooks configurados para usar .husky.');
} catch (error) {
  console.warn('Não foi possível configurar core.hooksPath automaticamente.', error.message);
}
