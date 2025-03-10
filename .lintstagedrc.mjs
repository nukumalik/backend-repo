import path from 'path'

const esbuildCmd = filenames =>
  `eslint -c ./eslint.config.mjs --fix ${filenames.map(filename => path.relative(process.cwd(), filename)).join(' ')}`

const prettierCmd = filenames =>
  `prettier --write ${filenames.map(filename => path.relative(process.cwd(), filename)).join(' ')}`

export default {
  '*.{ts,mjs}': [prettierCmd, esbuildCmd]
}
