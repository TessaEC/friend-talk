const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtControl');

    router.get('/', getAllThoughts);
    router.post('/', createThought);
    router.get('/:thoughtId', getThoughtById);
    router.put('/:thoughtId', updateThought);
    router.delete('/:userId/:thoughtId', deleteThought);
    router.post('/:thoughtId/reactions', addReaction);
    router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;