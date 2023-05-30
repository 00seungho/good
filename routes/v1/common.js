const express = require('express');
const router = express.Router();
const CommonController = require('../../controllers/v1/common-controller')

// bus-map 기능
router.get('/bus-map', CommonController.Con_getBusMap);

module.exports = router;