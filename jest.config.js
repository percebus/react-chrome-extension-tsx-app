module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    // '@testing-library/react/cleanup-after-each', // TODO
    '@testing-library/react/dont-cleanup-after-each', // XXX
    '@testing-library/jest-dom/extend-expect'
  ],
  reporters: [
    'default',
    // 'github-actions', // FIXME
    'jest-junit'
  ]
}
