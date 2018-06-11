const Logger = require('le_node')
const logger = new Logger({token: 'd5ee4ce8-a930-4f19-8406-f3332fc78be7'})

logger.info('this is a test message')
logger.err('this is an error message')
logger.log('debug', {message: 'This is a json debug message', json: true})