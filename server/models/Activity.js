const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  actId: {
    type: String,
    unique: true
  }
,
  comments:[
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
  ,
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
