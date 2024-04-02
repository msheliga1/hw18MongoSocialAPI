// MJS 3.31.24 - Modified from uri mp 18-28.
// 4.1.24 @ 11:30 - Tested and veriified working thought get, getOne, add, delete. 
const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

// Aggregate function to get the number of thoughts overall. No longer used. Use virtual instead. 
const thoughtCount = async () => {
  const numberOfThoughts = await Thought.aggregate()
    .count('thoughtCount');
  return numberOfThoughts;
}  // end thoughtCount 

module.exports = {    // Thoughts: getAll, get, create, update and delete. Reactions create and delete.
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      console.log("Getting all thoughts ... "); 
      const thoughts = await Thought.find();
      const thoughtObj = {
        thoughts,
        // headCount: await headCount(),
      };
      res.json(thoughtObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }

      res.json({
        thought,
        // grade: await grade(req.params.thoughtId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },  // end createThought
  // Updates a thought using the findOneAndUpdate method.  MJS 4.1 from uri 18-26 applicationController
  // Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  async updateThought(req, res) {
    console.log("Starting updateThought.");
    console.log(("Request.body is ", req.body)); 
    try {
      const application = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }, // end updateThought  

  // Delete a thought and remove them from the course
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      }
      const course = await User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );  
      if (!course) {
        return res.status(404).json({
          message: 'Thought deleted, but no courses found',
        });
      }
      res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }, // end deleteThought

  // ========== REACTIONS ==================
  // Add, getAll and Remove Methods
  async getReactions(req, res) {
    try {
      console.log("Getting all reactions for thought ... "); 
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }
      // console.log("thought is ", thought);
      // console.log("thoght usename is ", thought.username); 
      // console.log("Thought reactions array is ", thought.reactions); 
      // const data = JSON.parse(thought);  // thought is alreayd an object!! Wont work.
      const thoughtObj = { "reactions": thought.reactions, };  // MUST have key here!!
      res.json(thoughtObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }, // end getReactions (for a thought)

  // Add an reaction to a thought
  async addReaction(req, res) {
    console.log('You are adding an reaction');
    console.log(req.body);
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }, // end addRecation (to a thought)

  // Remove reaction from a thought.  /api/thoughts/:thoughtID/reactions/reactionID
  // This does NOT seem to work in 18-28 mp!!! 
  async removeReaction(req, res) {
    console.log('You are removing a reaction with id ', req.params.reactionId, " thought ID ", req.params.thoughtId);
    console.log(req.body);
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        // { $pull: { reactions: { reactionId: { $ne: '06' } } } }
        { $pull: { reactions: { reactionId: req.params.reactionId } } }  
        // { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }
      console.log("Seem to have removed reaction ok ... ");
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
