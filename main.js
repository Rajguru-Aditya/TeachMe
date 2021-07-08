const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
  //Form elements selection
  const nameInput = req.body.name;
  const emailInput = req.body.email;
  const dateInput = req.body.selectDays;
  const slotBtns = req.body.name;
});

app.post("/", function (req, res) {
  const submitBtn = req.body.subBtn;

  //Modal elements selection
  const modal = req.body.modal;
  const overlay = req.body.overlay;
  const btnCloseModal = req.body.closeModal;
  const btnOpenModal = req.body.showModal;
  // Making the modal work
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  // btnOpenModal.on("click", openModal);

  const showAlert = function () {
    const div = document.createElement("div");
    div.className = "alert alert-success";
    div.appendChild(document.createTextNode("Lesson Booked Successfully!"));
    const container = document.querySelector(".container-fluid");
    const form = document.querySelector(".form");
    container.insertBefore(div, form);

    // Make the alert disappear in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  };

  // btnCloseModal.on("click", closeModal);

  // overlay.on("click", closeModal);

  // submitBtn.emit("click", showAlert);
  // submitBtn.EventEmitter("click", showAlert);
  res.render("success");
});

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
