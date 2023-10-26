const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');
const jwtString="heythisishiddenstringsafety";

router.post("/createUser", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      location: req.body.location,
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
});
module.exports = router;

router.post("/loginUser", async (req, res) => {
  const email = req.body.email;
  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({
        errors: "No user registered",
      });
  
    }
    const pwcompare = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!pwcompare) {
      return res.status(400).json({
        errors: "Enter correct credentials",
      });
    }
const data= {
    user:{
        id:userData._id
    }
}

const authToken=jwt.sign(data,jwtString)

return res.json({
    success:true,
    authToken:authToken
})

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
