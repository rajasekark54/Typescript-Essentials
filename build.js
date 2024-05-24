const esbuild = require('esbuild');

// Define multiple entry points
const entryPoints = [
  '1_StaticTypes/1_BuiltInOrPrimitiveTypes/example.ts',
  '1_StaticTypes/2_UserDefinedTypes/1_arrayAndTuples.ts',
];

// Build configuration
esbuild
  .build({
    entryPoints: entryPoints,
    // bundle: true,
    // minify: true,
    // sourcemap: true,
    outdir: 'dist',
    platform: 'node', // or 'browser' for browser-based projects
    target: ['ESNext'], // specify the target ECMAScript version
  })
  .then(() => {
    console.log('Build succeeded');
  })
  .catch(() => process.exit(1));
