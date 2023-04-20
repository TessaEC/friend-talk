const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userControl');

    router.get('/', getAllUsers);
    router.post('/', createUser);
    router.get('/:id', getUserById);
    router.put('/:id', updateUser);
    router.delete('/:id', deleteUser);
    router.post('/:userId/friends/:friendId', addFriend);
    router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;