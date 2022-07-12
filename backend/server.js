const express = require("express");

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const cors = require("cors");

const connectDB = require("./config/db.js");

const User = require("./models/userModel");

const Task = require("./models/taskModel");

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); ///it take json object from client

//API CURD for registerUSer
app.post("/registerUser", (req, res) => {
  const newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("successfully jjjjjjj done");
      res.json(newUser); //it is save as json
    }
  });
});

//END API Cured for registerUser

//user CURD for user details

app.post("/", (req, res) => {
  const { email, password } = req.body;
  // console.log(password);
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (err) {
        res.send("1");
      } else {
        console.log(user._id);
        if (user.password === password) {
          res.send(user);
        } else {
          res.send(user);
        }
      }
    }
  });
  // res.send(true);
});

//end CURD for user details

// CURD for Tasks

app.post("/user", (req, res) => {
  const newTask = new Task(req.body);

  newTask.save((err, task) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("successfully save task done");
      res.json(newTask); //it is save as json
    }
  });
});
app.post("/posts", (req, res) => {
  Task.find({ userId: req.body.id }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.send(task);
  });
});

app.delete("/posts/:postID", (req, res) => {
  Task.deleteOne({ _id: req.params.postID }, (err, message) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "TASK POST SUCCEFULLY DELETED" });
  });
});

// end of Tasks

app.get("/", (req, res) => {
  res.send("get the server start");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`)
);
