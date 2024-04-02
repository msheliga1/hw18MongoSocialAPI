// MJS 3.31.24 - Modified from 18-28 mp courseController
const { User, Thought } = require('../models');
// Must be outside of export.  Aggregate function orig getting studentCount.
// Also must 
/* const friendCount = async () => {
    // const numberOfStudents = await User.aggregate().count('studentCount');
    return 3;
  } */

// Aggregate function for getting the overall grade using $avg
const friendCount = async (userId) =>
  Student.aggregate([
    // only include the given user by using $match
    { $match: { _id: new ObjectId(userId) } },
    {
      $unwind: '$assignments',
    },
    {
      $group: {
        _id: new ObjectId(userId),
        // overallGrade: { $avg: '$assignments.score' },
        overallGrade: "3",
      },
    },
  ]);

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }, // end getAll Users
  // Get one user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('thoughts');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      // Mimick what student controller does
      // res.json({ user,
      //   friendCount: await friendCount(req.params.userId),
      // });

      // Made friendCouont a virtual - much easier since not an aggregate.
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }, // end get one User
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Friend Routes 
  // ---------------------------- 

  // Add a friend to a user
  async addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }, // end addFriend (to a user)

};
