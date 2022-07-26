module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
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
