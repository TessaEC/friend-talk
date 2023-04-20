const router = require('express').Router();
const thoughtRoute = require('./thoughtRoute');
const userRoute = require('./userRoute');

router.use('/user', userRoute);
router.use('/thought', thoughtRoute);

module.exports = router;