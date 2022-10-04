// const User = require('../models/user');
const User = require('../models/user.js');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config()
//auth handlers
//register user

exports.registerUser = async (request, response) => {
    //Validate user
    if (request.body.name === "") return response.status(400).send({ message: "Name cannot  be empty" });

    // Check if this user already exisits
    let user = await User.findOne({ email: request.body.email });
    if (user) {
        return response.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: request.body.name,
            phone: request.body.phone,
            email: request.body.email,
            password: hashPassword
        });
        const salt =  bcrypt.genSalt(10);
        hashPassword =  bcrypt.hash(user.password, salt);
         user.save();
        response.send(user);
    }
};

//login user
exports.loginUser = async(request, response) => {

    // check if email exists in database && is valid
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
        return response.status(400).send({ message: "User does  not exist" });
    }
    //check if password is correct
    const validPassword = await bcrypt.compare(request.body.password, user.password);
    if (!validPassword) {
        return response.status(400).send({ message: "Invalid Credentials" });
    }
    //generate && sign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    response.header('auth-token', token).status(200).send(token);
};


