const router = require('express').Router();
const getAdventures = require('../controllers/get-adventures');
const getTales = require('../controllers/get-tales');
const getServerStatus = require('../controllers/get-server-status');

const auth = require('../controllers/auth');
const innerLogin = require('../controllers/login-inner');
const innerSignup = require('../controllers/signup-inner');

const createAdventure = require('../controllers/admin/create-adventure');

router.use("/", getServerStatus);
router.use("/get-adventures", getAdventures);
router.use("/get-tales", getTales);

router.use("/auth", auth)
router.use("/inner-login", innerLogin);
router.use("/inner-signup", innerSignup);

router.use("/admin/create-adventure", createAdventure);

module.exports = router;