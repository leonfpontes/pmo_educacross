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