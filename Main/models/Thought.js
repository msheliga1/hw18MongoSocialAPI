// MJS 3.31.24 - Thought (social media post) mdoel. - Modified uri act 18-28 mp student
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
    },
    userName: {
      type: String,      
    },
    reactions: [reactionSchema],
  },
  {
    // toJSON: { getters: true, virtuals: true, },
    toJSON: { virtuals: true, },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Next line actually  "builds" the model. 
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
