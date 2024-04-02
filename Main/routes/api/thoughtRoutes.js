// MJS 3.31.24 - modified from studentRoutes mp 18-28. 
const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought, 
  addReaction,
  getReactions, 
  removeReaction,
} = require('../../controllers/thoughtController');

// GETALL and POST /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, PUT and DELETE /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).get(getReactions);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
