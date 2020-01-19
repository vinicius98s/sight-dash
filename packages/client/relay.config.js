module.exports = {
  src: './src',
  schema: '../server/schema.graphql',
  artifactDirectory: './src/__generated__',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
};
