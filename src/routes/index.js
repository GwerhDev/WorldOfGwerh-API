const router = require('express').Router();
const getAdventures = require('../controllers/get-adventures');
const getTales = require('../controllers/get-tales');
const getServerStatus = require('../controllers/get-server-status');

router.use("/", getServerStatus);
router.use("/get-adventures", getAdventures);
router.use("/get-tales", getTales);

module.exports = router;