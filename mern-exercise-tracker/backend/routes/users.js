const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get( (req, res) => {
    User.find()
    .then(users => res.json(users)) // return users from database in json format
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post( (req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;


//######################################
// call routes via postman/insomnia 

// POST localhost:5000/users/add
/*
 Body > raw > JSON
 {
     "username": "Vanessa"
 }
 */

 // GET localhost:5000/users