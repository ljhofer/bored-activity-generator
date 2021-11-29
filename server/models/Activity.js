const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  actkey: {
    type: String,
    unique: true
  },
  activity: {
    type: String
  },
  type: {
    type: String
  },
  participants: {
    type: Number
  },
  accessibility: {
    type: Number
  },
  comments:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
  ,
 
  
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
