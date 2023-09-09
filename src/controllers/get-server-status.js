const router = require('express').Router();

router.get('/', (req,res) => { res.status(200).send('Server listening...')});

module.exports = router;