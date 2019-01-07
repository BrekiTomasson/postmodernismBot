const dotenv = require('dotenv-extended')
  .load({
    assignToProcessEnv: true,
    encoding: 'utf8',
    errorOnExtra: true,
    errorOnMissing: true,
    overrideProcessEnv: false,
    path: '.env',
    schema: '.env.schema',
    silent: true
  })

module.exports = dotenv
