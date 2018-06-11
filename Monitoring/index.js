require('@google-cloud/trace-agent').start()
const express = require('express')
const bunyan = require('bunyan')
const LoggingBunyan = require('@google-cloud/logging-bunyan')
const loggingBunyan = LoggingBunyan()
const log = bunyan.createLogger({
name: "stackdriver",
streams: [
{stream: process.stdout},
loggingBunyan.stream()
],
level: 'info'
})
const app = express()
app.get('/', (req, res) => {
log.info(`request from ${req.connection.remoteAddress}`)
res.send('Hello World!')
})
app.listen(3000, () => {
console.log('Listening in port 3000')
})