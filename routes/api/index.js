const router = require('express').Router();
const reactionRoute = require('./reactionRoute');
const thoughtRoute = require('./thoughtRoute');
const userRoute = require('./userRoute');

router.use('/user', userRoute);
router.use('/thought', thoughtRoute);
router.use('/reaction', reactionRoute);

module.exports = router;