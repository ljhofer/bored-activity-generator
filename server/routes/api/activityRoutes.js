
const router = require('express').Router();

const { getTopActivities, createActivity, getActivityById, updateActivity } = require('../../controllers/ActivityController');


router.route('/').get(getTopActivities);
router.route('/').post(createActivity);
router.route('/:id').get(getActivityById);
router.route('/:actkey').put(updateActivity);


module.exports = router;