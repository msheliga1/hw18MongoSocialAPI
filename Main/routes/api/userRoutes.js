// MJS 3.31.24 - Modified from mp18-28. 
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend, 
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friend/:friendId
router
  .route('/:userId/friends/:friendId')
  .put(addFriend);  // modifies => put, not POST

module.exports = router;
