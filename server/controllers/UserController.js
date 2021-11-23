const { User } = require('../models');

module.exports = {

    // signup
    async createUser({ body }, res ) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: `Unable to create user` });
        }

        res.status(200).json(user);
    }

    // login


    // log out


    // updateUsername



    // updateName 



    // updateEmail



    // getUser


 
    // addFollowing
        // add to other person's followers


    // deleteFollowing



    // getAllFollowing



    // getAllFollowers

};