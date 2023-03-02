const express = require('express');
const router = express.Router();

const JourneyController = require ('../controllers/journeyController')

router.get('/', JourneyController.Index);

module.exports = router