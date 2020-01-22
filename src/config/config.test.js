/* eslint-disable no-undef */
import config from './config.js'

test('Test siteTitle config', () => {
  expect(config.siteTitle).not.toEqual('')
  expect(config.siteTitle).not.toBeNaN()
  expect(config.siteTitle).not.toBeNull()
  expect(config.siteTitle).not.toBeUndefined()
})