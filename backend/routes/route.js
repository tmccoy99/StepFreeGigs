const express = require('express');
const router = express.Router();

const routeController = require ('../controllers/route')

router.get('/', routeController.Index);

module.exports = router