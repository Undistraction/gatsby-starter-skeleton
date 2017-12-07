module.exports = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/config/**/*.js', 'src/styles/**/*.js'],
  coverageReporters: ['json'],
  setupFiles: [],
  modulePathIgnorePatterns: ['.cache', 'src/__tests__/data.js'],
};
