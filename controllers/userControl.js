const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find()
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // get one user by id
    async getUserById(req, res) {
        try {
            const dbUserData = await User.findOne(
                { _id: req.params.userId })
                .populate('thoughts')
                .populate('friends')
                .select('-__v');
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // create a user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // update a user by id
    async updateUser(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                {$set: req.body},
                { new: true, runValidators: true }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // delete a user by id
    async removeUser(req, res) {
        try {
            const dbUserData = await User.findOneAndDelete(
                { _id: req.params.userId }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json('User Deleted!');
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // add a friend to a user
    async addFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // remove a friend from a user
    async removeFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};

