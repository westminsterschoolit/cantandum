// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'; // For minification

export default {
  input: '_js/main.js', // Your main JavaScript file
  output: {
    file: 'assets/js/main.min.js', // Output to assets/js as a minified bundle
    format: 'es', // Output as an ES module, compatible with type="module"
    sourcemap: true, // Generate sourcemap for debugging
  },
  plugins: [
    nodeResolve(),   // Resolve npm modules
    commonjs(),      // Convert CommonJS to ES modules
    terser()         // Minify the output
  ]
};