const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtControl');

    router.route('/')
    .get(getAllThoughts)
    .post(createThought);

    router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

    router.route('/:thoughtId/reactions')
    .post(addReaction)

    router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;