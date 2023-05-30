const express = require('express');
const router = express.Router();
const CommonController = require('../../controllers/v1/common-controller')

// bus-map 기능
router.get('/sub-master', CommonController.Con_sub_master);
router.get('/sub-bus', CommonController.Con_get_bus);
router.get('/sub-ev', CommonController.Con_get_sub_ev);


module.exports = router;