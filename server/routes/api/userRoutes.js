const router = require('express').Router();

const { getUsers, createUser, getUserById, updateUser, login, logout } = require('../../controllers/UserController');

router.route('/').get(getUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserById);
router.router('/:id').put(updateUser);
router.route('/login').post(login);
router.route('logout').post(logout);


module.exports = router;