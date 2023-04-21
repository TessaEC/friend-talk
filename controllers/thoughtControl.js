const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find()
                .select('-__v');
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // get one thought by id
    async getThoughtById(req, res) {
        try {
        const dbThoughtData = await Thought
        .findOne({ _id: req.params.thoughtId })
            .populate('reactions')
            .select('-__v')

                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found!' });
                    return;
                }
                res.json(dbThoughtData)
            } catch(err) {
                console.log(err);
                res.status(400).json(err);
            };
    },
    // create a thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            const dbUserData = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: dbThoughtData._id } },
                { new: true }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found!' });
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
   
    },
    // update a thought by id
    async updateThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                {$set: req.body},
                { new: true, runValidators: true }
            );
            if (!dbThoughtData) {
                return res.status(404)
                .json({ message: 'No thought found!' });
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // delete a thought by id
    async removeThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought found!' });
            }
            res.json('Thought deleted!');
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // add a reaction to a thought
    async addReaction(req, res) {
        try {
            const { reactionBody, username } = req.body;
            const newReaction = { reactionBody, username };
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: newReaction } },
                { new: true }
            );
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No thought found!' });
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'No reaction found!' });
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};
