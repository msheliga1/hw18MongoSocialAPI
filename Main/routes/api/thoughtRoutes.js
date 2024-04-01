// MJS 3.31.24 - modified from studentRoutes mp 18-28. 
const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// POST /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
