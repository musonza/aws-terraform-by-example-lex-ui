const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  AWS_REGION: '"us-east-1"',
  POOLID: '"us-east-1:XXXXXXXXX"',
  BOT_NAME: '"Classifieds"',
  AUTH_PROVIDER_NAME: '"cognito-idp.us-east-1.amazonaws.com/us-east-XXXXXX"',
  CLIENT_ID: '"XXXXXXXXXXXX"',
  COGNITO_DOMAIN: '"xxxx.auth.xxxx.amazoncognito.com"'
})
