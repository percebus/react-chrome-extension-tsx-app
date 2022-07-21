module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  reporters: [
    'default',
    // 'github-actions', // FIXME
    'jest-junit'
  ]
}
