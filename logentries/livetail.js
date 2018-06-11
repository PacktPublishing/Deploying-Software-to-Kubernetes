const Logger = require('le_node')

const logger = new Logger({token: 'd5ee4ce8-a930-4f19-8406-f3332fc78be7'})

setInterval(() => {
 logger.info(`This is my timed log on ${Date.now()}`)
}, 500)
