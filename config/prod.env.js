'use strict'
const merge = require('webpack-merge')
const Env = require('./env')

module.exports = merge(Env, {
  NODE_ENV: '"production"',
})
