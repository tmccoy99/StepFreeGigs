const express = require('express')
const app = express()
const port = 3000

app.get('/events', (req, res) => {
  res.send('return the events near the user')
})

app.get('/route', (req, res) => {
  res.send('return the route as an object')
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})