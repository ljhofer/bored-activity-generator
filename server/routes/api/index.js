const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const activityRoutes = require('./activityRoutes');
// const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
// router.use('/activity', activityRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;