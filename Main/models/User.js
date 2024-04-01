// MJS 3.31.24 - From mp14-28 Course schema.
const { Schema, model } = require('mongoose');
const { isEmail } = require('validator'); 
// import { isEmail } from 'validator';  // wont work outside a module

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
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
    startDate: {
      type: Date,
      default: Date.now(),
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
