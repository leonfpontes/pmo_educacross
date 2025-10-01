#!/usr/bin/env node
const { execSync } = require('child_process');

const run = (command) => {
  execSync(command, {
    stdio: 'inherit',
    env: process.env,
  });
};

run('next build');

if (process.env.VERCEL) {
  console.log('\nDetected Vercel environment. Skipping `next export` and relying on Next.js static output.');
} else {
  console.log('\nBuild complete. Static files are available in the `out` directory.');
}
