const express = require('express')
const port = 3000
const app = express()

const eventsRouter = require('./routes/events')
const routeRouter = require('./routes/route')

app.use('/events', eventsRouter)
app.use('/route', routeRouter)

if (process.env.NODE_ENV !== 'test'){
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
  })
}
module.exports = app