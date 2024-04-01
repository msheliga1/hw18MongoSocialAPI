// MJS 3.31.24 - From mp14-28 Course schema.
const { Schema, model } = require('mongoose');
const { isEmail } = require('validator'); 
// import { isEmail } from 'validator';  // wont work outside a module

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, 
      required: true,
      trim: true, 
    },
    email: {
      type: String,
      unique: true, 
      required: true,
      validate: [ isEmail, 'Invalid email address' ]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  { // Per Act 18-22. Mongoose has two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Indicate that we want virtuals to be included with our response, overriding the default behavior
    toJSON: { virtuals: true, },
    id: false,
  }
); // end userSchema

// Per Act 18-21 Post model.Create a virtual property `friendCount` that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

userSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.length;
});

const User = model('user', userSchema);

module.exports = User;
