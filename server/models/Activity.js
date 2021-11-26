const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  actId: {
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
  accesibility: {
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
