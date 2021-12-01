const router = require('express').Router();
const { getUserById, createUser, getSingleUser, getUsers, login, updateUser, userAddActivity } = require('../../controllers/userController');

// const { getUsers, createUser, getUserById, updateUser, login, logout } = require('../../controllers/UserController');

// router.route('/').get(getUsers);
// router.route('/').post(createUser);
// router.route('/:id').get(getUserById);
// router.route('/:id').put(updateUser);

// Import the auth middleware
const { authMiddleware } = require('../../utils/auth');


router.route('/').get(getUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/login').post(login);
router.route('/addactivity').put(userAddActivity)


module.exports = router;
