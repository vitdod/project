module.exports = {
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    ignorePatterns: ['**/dist/*', '**/lib/*'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      'arrow-body-style': ['off'],
      settings: {
        next: {
          rootDir: './',
        },
      },
    },
  }