// MJS 3.31.24 - Thought (social media post) mdoel. - Modified uri act 18-28 mp student
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// import moment from 'moment';  // For date formatting getter.  ES6 syntax
var moment = require('moment'); 

// Schema to create Thought model.  This is actually a social media post, attached to a user. 
// Each thought (post) can have "reactions", which are just like comments. 
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: prettyDate, 
    },
    username: {  // best to check if user exists!
      type: String,   
      required: true,    
    },
    reactions: [reactionSchema],
  },
  {  // getters true => JSON also uses getters
    toJSON: { getters: true, virtuals: true, },
    // toJSON: { virtuals: true, },
  }
);

// createdAt should only return the date, not the time
function prettyDate(createdAt) {
  // return "10-26-1967";  // cant easily get text inside of format
  const formatted = moment(createdAt).format('MM-DD-YYYY hh:ss a');
  return formatted; 
}

// Return a reactionCount value as if it were actaully stored in the model
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Next line actually  "builds" the model. 
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
