const express = require("express");
const cors = require("cors");
const User = require("../models/User");
const router = express();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
var nodemailer = require("nodemailer");
require("dotenv").config();
const multer = require("multer");
const fs = require("fs");
const imageModel = require("../models/imageModel");
const cookieParser = require("cookie-parser");

router.set("view engine", "ejs");
router.use(express.urlencoded({ extended: false }));

const JWT_SECRET = "shjh";

router.use(express.json());
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.use(cookieParser());
// router.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
// router.use(bodyParser.json);

//ROUTE 1:Create a User using: POST '/api/auth/createuser'.No Login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid first name").isLength({ min: 3 }),
    body("contact", "Enter a valid last name").isLength({ min: 3 }),
    body("email", "Enter a valid E-mail").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are errors return bad request and errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      //Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry the user with this email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const secpassword = await bcrypt.hash(req.body.password, salt);

      //this will wait and create a new user
      user = await User.create({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        password: secpassword,
        UserType: req.body.UserType,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      //used jsonwebtoken to compare the data given and the password
      //eslint-disable-next-line
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2:Authenticate a User using: POST '/api/auth/login'.No Login required
router.post(
  "/login",
  [
    body("email", "Enter a valid E-mail").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //if there are errors return bad request and errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password, UserType } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken, UserType });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//ROUTE 3: Get Logged in user details using:POST '/api/auth/getuser' Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/getalluser", async (req, res) => {
  try {
    const user = await User.find().select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//====> get single user
router.get("/getuser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Remove user
router.delete("/delete-user/:id", async (req, res) => {
  try {
    let note = await User.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    note = await User.findByIdAndDelete(req.params.id);
    let success = true;
    res.json({ success, Message: "User has been deleted" });
  } catch (error) {
    console.log({ error });
    res.status(500).send("Internal Server Error");
  }
});

//Reset password code starts from here
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/api/auth/reset-password/${oldUser._id}/${token}`;
    res.send("Done");

    var transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "house.rent138@outlook.com",
        pass: process.env.PASS,
      },
    });

    var mailOptions = {
      from: "house.rent138@outlook.com",
      to: email,
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log("Unable to postoo");
  }
});

router.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

//Reset password code Ended here

router.post("/user-details", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    service: "hotmail",
    auth: {
      user: "houserent138@hotmail.com",
      pass: process.env.PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "aditya8877123@gmail.com",
      subject: "New user details submitted",
      html: `
        <h1>New user details submitted:</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log(`Message sent: ${info.messageId}`);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email sending failed" });
  }
});

//Image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("testImage"), (req, res) => {
  const saveImage = imageModel({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send("image is saved");
});

router.get("/", async (req, res) => {
  const allData = await imageModel.find();
  res.json(allData);
});

//Cloudnary config
// cloudinary.config({
//   cloud_name: "dc40fpoep",
//   api_key: "158641916328769",
//   api_secret: "fWRhtq80PEzUu1VhwYPa_WkE_qA",
// });

module.exports = router;
