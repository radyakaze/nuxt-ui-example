import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.yarn/*',
    'commitlint.config.js',
  ],
})
