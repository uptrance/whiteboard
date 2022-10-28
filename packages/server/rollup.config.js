import alias from '@rollup/plugin-alias'
import path from 'path'
import shebang from 'rollup-plugin-preserve-shebang'
import typescript from '@rollup/plugin-typescript'

const projectRootDir = path.dirname('./')

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(projectRootDir, 'src'),
        },
      ],
    }),
    shebang(), // add #!/usr/bin/env node
  ],
}
