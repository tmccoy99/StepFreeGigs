const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

const eventsRouter = require('./routes/events');
const journeyRouter = require('./routes/journey');

app.use(cors());

app.use('/events', eventsRouter);
app.use('/journey', journeyRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
module.exports = app;
