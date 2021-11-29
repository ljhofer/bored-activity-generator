const { User } = require('../models');

module.exports = {

   // getUsers
   async getUsers(req, res) {
           
        const allUsers = await User.find({});

        if (!allUsers) {
        return res.status(400).json({ message: 'No users found' });
        }
        
        res.status(200).json(allUsers);
  },
   
    // createUser
    async createUser({ body }, res ) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: `Unable to create user` });
        }

        res.status(200).json(user);
    },

    // getUserById
    async getUserById({ params }, res) {
        console.log(params)
        const user = await User.findOne({ _id: params.id });
    
        if (!user) {
          return res.status(400).json({ message: 'No user found by that id' });
        }
    
        res.status(200).json(user);
    },


    // updateUser
        // updateUsername
        // updateName 
        // updateEmail
        // addFollowing
    async updateUser(req, res) {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
    
        if (!user) {
            return res.status(400).json({ message: 'Unable to update User' });
        }
    
        res.status(200).json(user);
        },

    // login

    
    // log out


    // Wishlist
        // add to other person's followers
        // deleteFollowing

};