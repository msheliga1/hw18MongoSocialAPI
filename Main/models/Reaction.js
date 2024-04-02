// MJS 3.31.24 - from URI mp 18-28.  A reaction is really a comment on a post. 
const { Schema, Types } = require('mongoose');
var moment = require('moment');  // For date formatting getter.

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      // default: 'Unnamed reaction',
    },
    username: {  // best to check if user exists!
      type: String,   
      required: true,    
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: prettyDate, 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);  // end reactionSchema

// createdAt should return decently formatted date-time
function prettyDate(createdAt) {
  // return "10-26-1967";  // cant easily get text inside of format
  const formatted = moment(createdAt).format('MM-DD-YYYY hh:ss a');
  return formatted; 
}

// Do NOT actually build this model. per assignment. 

module.exports = reactionSchema;
