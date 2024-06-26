const router = require('express').Router();
const admin = require('../controllers/admin');

const getTales = require('../controllers/get-tales');
const getAdventures = require('../controllers/get-adventures');
const getServerStatus = require('../controllers/get-server-status');

const auth = require('../controllers/auth');
const innerLogin = require('../controllers/login-inner');
const innerSignup = require('../controllers/signup-inner');

router.use("/admin", admin);

router.use("/", getServerStatus);
router.use("/get-tales", getTales);
router.use("/get-adventures", getAdventures);

router.use("/auth", auth);
router.use("/inner-login", innerLogin);
router.use("/inner-signup", innerSignup);

module.exports = router;