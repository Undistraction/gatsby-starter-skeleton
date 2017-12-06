module.exports = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/config/**/*.js'],
  coverageReporters: ['json'],
  setupFiles: [],
  modulePathIgnorePatterns: ['.cache'],
};
