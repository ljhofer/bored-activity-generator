const { Comment } = require('../models');

module.exports = {

    //addComment
        //addText
        //addRating'

    /*
        addComment
        adds a new comment to the db
        @param body  (includes  comment, actkey, userId)
        @returns json
    */
    async addComment(req, res) {
        const commentObj = { text: req.body.comment, postedBy: req.body.userId }
        const newComment = await Comment.create(commentObj);
    
        if (!newComment) {
            return res.status(400).json({ message: 'Unable to create Comment' });
        }
        
        res.status(200).json(newComment);
    },
        
 
    //updateComment
        //updateText
        //updateRating
    async updateComment(req, res) {
        const comment = await Comment.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
    
        if (!comment) {
            return res.status(400).json({ message: 'Unable to update Comment' });
        }
    
        res.status(200).json(comment);
        },
        
    // Deletes comment from the database
    async deleteComment (req, res) {
        try {
            const post = await Comment.findById(req.params.id);
            if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
            } else {
            res.status(403).json("you can delete only your post");
            }
        } catch (err) {
            res.status(500).json(err);
        }}
       
};