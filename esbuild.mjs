import esbuild from 'esbuild'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'node',
    target: 'node18',
    sourcemap: true,
    minify: true,
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  })
  .catch(() => process.exit(1))
