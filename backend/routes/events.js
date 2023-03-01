const express = require('express');
const router = express.Router();

const EventsController = require ('../controllers/eventsController')

router.get('/', EventsController.Index)

module.exports = router