const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  actId: {
    type: String,
    unique: true
  },
  ratings: [{
    value: Number,
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  }]
,
  comments:[{
    text: String,
    postedOn: {
      type: Date,
    default: Date.now,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
  ,
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
