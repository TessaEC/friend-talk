const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userControl');

    router.route('/')
    .get(getAllUsers)
    .post(createUser);

    router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);

    router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;