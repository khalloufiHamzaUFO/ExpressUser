//Importation
const express = require('express');
const bcrypt = require('bcrypt');
const path = require("path");
const connectDB = require("./config");
const mongoose = require("mongoose");
const User = require('./models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware/authMiddleware');

// Crect express index
const index = express();
index.use(express.json());
index.use(express.urlencoded({extended:false}));

// Connect to the database
connectDB();

//For the views
index.set('view engine', 'ejs');






index.get("/signIn", (req, res) =>{
  res.render("signIn");
});


index.get("/signUp", (req, res) =>{
  res.render("signUp");

});
index.get("/home", (req, res) =>{
  res.render("home");

});

index.post("/signUp", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.redirect("/");
    console.log(newUser);
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Internal Server Error");
  }
});

index.post('/signIn', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, '2j9f3rj2@fj0f8asdlfj!f03', {
      expiresIn: '10h',
    });
    // localStorage.setItem('token',token)
    res.redirect('/home');

    //res.status(200).json({ token });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

/*index.get("/forgotPassword", (req, res) => {
    res.render("forgotPassword");
});*/
/*
index.post("/forgotPassword", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User not found.");
        }

        const token = crypto.randomBytes(20).toString('hex');

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; 
        await user.save();

        
        res.send("Password reset email sent.");

    } catch (error) {
        console.error("Error initiating password reset:", error);
        res.status(500).send("Internal Server Error");
    }
});*/
/*
index.post("/resetPassword", async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).send("Invalid or expired token.");
        }

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.send("Password reset successfully.");

    } catch (error) {
        console.error("Error resetting password:", error);
        res.status(500).send("Internal Server Error");
    }
});
*/

const port = 5000
index.listen (port, () =>{
  console.log(`Server running on port : ${port}`)
})