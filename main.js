const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const alert = require("alert");

mongoose.connect(
  "mongodb+srv://admin-aditya-rajguru:aditya221b@teachmecluster.xflpn.mongodb.net/teachMeDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

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
    student.save();
    res.render("success");
  }
});

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully");
});
