/* eslint import/no-extraneous-dependencies: 0 */
import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import babelPresetEnv from '@babel/preset-env';
import pkg from './package.json';

rollup({
  entry: 'src/index.js',
  plugins: [
    babel({
      presets: [[babelPresetEnv, { modules: false }]],
      babelrc: false
    })
  ]
})
  .then((bundle) =>
    bundle.write({
      dest: 'validator.js',
      format: 'umd',
      moduleName: pkg.name
    })
  )
  .catch((e) => {
    process.stderr.write(`${e.message}\n`);
    process.exit(1);
  });
