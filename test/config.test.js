const config = require('../src/config')

/**
 * Make sure that the keys exist and are of the right type.
 */
test('should contain a numeric value for how often to save the brain', () => {
  expect(typeof config.timer.brainsave).toBe('number')
})

test('should contain a numeric value for how often to log to console', () => {
  expect(typeof config.timer.console).toBe('number')
})

test('should contain a numeric value for the minimum amount of time between tweets', () => {
  expect(typeof config.timer.twitterMinimum).toBe('number')
})

test('should contain a numeric value for the maximum time between tweets', () => {
  expect(typeof config.timer.twitterMaximum).toBe('number')
})

/**
 * Make sure that the logical relationship between keys match.
 */
test('should have a minimum time that is lower than the maximum time', () => {
  expect(config.timer.twitterMaximum).toBeGreaterThan(config.timer.twitterMinimum)
})

/**
 * Make sure that the numbers are reasonable (not too small, not too large)
 */
test('should ensure that the brain save number is large enough', () => {
  expect(config.timer.brainsave)
  .toBeGreaterThanOrEqual(100000)
})

test('should tweet no more often than every five minutes', () => {
  expect(config.timer.twitterMinimum)
  .toBeGreaterThanOrEqual(300000)
})

test('should tweet at least once per day', () => {
  expect(config.timer.twitterMaximum)
  .toBeLessThanOrEqual(86400000)
})
