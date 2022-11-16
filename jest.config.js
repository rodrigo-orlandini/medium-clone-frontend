module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/imageMock.ts"
  }
};