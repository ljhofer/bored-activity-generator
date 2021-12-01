const { Activity, Comment, User } = require('../models');

module.exports = {


    // getTopActivities
    async getTopActivities(req, res) {
      // const allActivities = await Activity.find({}).populate("comments").populate("postedBy");
      const allActivities = await Activity.find({}).populate({
        path: "comments",
        populate: {
          path: "postedBy",
          model: "User"
        }
      });
      allActivities.splice(6)
  
      if (!allActivities) {
        return res.status(400).json({ message: 'No activities found' });
      }
  
      res.status(200).json(allActivities);
    },
    
    
    
    // async getTopActivities(req, res) {
    //   try {
    //     const aveActivity = await Activity.aggregate([{ $addFields: { aveRating: { $sum: '$comments.rating' }, }, },])
    // 

    //     .limit(6)
    //   }
    //   catch(err){
    //     throw err
    //   }
    // },
    // async getTopActivities (req, res) {
 
    //     Activity.aggregate([{ $addFields: { aveRating: { $sum: '$exercises.duration' }, }, },
    //   ])
    //     .sort({ aveRating: -1})

    //     .limit(6)
    //   }
    //   catch(err){
    //     throw err
    //   }
    // },
    
    
    
    // getActivityById
    
    async getActivityById({ params }, res) {
        const activity = await Activity.findOne({ _id: params.id }).populate('comments');
    
        if (!activity) {
          return res.status(400).json({ message: 'No activity found by that id' });
        }
    
        res.status(200).json(activity);
      },

    
    // createActivity
    async createActivity({ body }, res) {
        const activity = await Activity.create(body);
    
        if (!activity) {
        return res.status(400).json({ message: 'Unable to create Activity' });
        }
    
        res.status(200).json(activity);
    },

    // update activity 
    async updateActivity({ params, body }, res) {
      console.log("params", params)
      console.log("body", body)
      const activity = await Activity.findOneAndUpdate(
        { actkey: body.actkey },
        {$push: {comments: body.commentId}},

      );
      console.log("controller", activity);


      if (!activity) {
        return res.status(400).json({ message: 'Unable to update Activity' });
      }
  
      res.status(200).json(activity);
    },

    
};