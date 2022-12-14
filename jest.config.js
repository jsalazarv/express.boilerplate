module.exports = {
  coverageThreshold: {
    global: {
      lines: 95,
    },
  },
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/.eslintrc.js',
    '!**/node_modules/**',
    '!<rootDir>/**/*types.ts',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/docs/**',
    '!<rootDir>/src/database/migrations/**/*.ts',
    '!<rootDir>/src/database/data-source.ts',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.(spec|test)\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/', '<rootDir>/coverage/'],
  setupFiles: ['<rootDir>/src/test.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node',
};
