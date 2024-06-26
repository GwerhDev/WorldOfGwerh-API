const router = require('express').Router();

const createAdventure = require('./create-adventure');

router.use("/create-adventure", createAdventure);

module.exports = router;