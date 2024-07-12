import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  target: 'esnext',
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  entry: ['./src/index.ts'],
  minify: !options.watch,
}));
