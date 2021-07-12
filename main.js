const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const alert = require("alert");

mongoose.connect("mongodb://localhost:27017/teachMeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const studentSchema = {
  name: String,
  email: String,
  date: String,
  slot: String,
};

const Student = mongoose.model("Student", studentSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", function (req, res) {
  const checkboxes = req.body.checkBtn;
  const nameInput = req.body.name;
  const emailInput = req.body.email;
  const dateInput = req.body.selectDays;

  if (!checkboxes) {
    alert("Please select a slot for your lessons!");
  } else {
    const student = new Student({
      name: nameInput,
      email: emailInput,
      date: dateInput,
      slot: checkboxes.toString(),
    });
    // console.log(nameInput);
    // console.log(emailInput);
    // console.log(dateInput);
    // console.log(checkboxes.toString());
    student.save();
    res.render("success");
  }
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
