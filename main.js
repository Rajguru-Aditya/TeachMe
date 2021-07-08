//Form elements selection
const nameInput = document.querySelector("#name").value;
const emailInput = document.querySelector("#email").value;
const dateInput = document.querySelector("#selectDays").value;
const slotBtns = document.querySelectorAll(".btn-check");
const submitBtn = document.querySelector("#submitBtn");

//Modal elements selection
const modal = document.querySelector("#slotsModal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".closeModal");
const btnOpenModal = document.querySelector(".showModal");

// Making the modal work
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenModal.addEventListener("click", openModal);

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

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//Send Email
const sendMail = function (params) {
  let tempParams = {
    from_name: nameInput,
    to_name: "CodeMon",
    message: dateInput,
  };

  emailjs
    .send("service_7v9d75q", "template_elyk4ti", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
};

submitBtn.addEventListener("click", sendMail);

// for (let i = 0; i < slotBtns.length; i++) {
//   slotBtns[i].addEventListener("click", () => {
//     slotBtns[i].classList.add("active");
//     console.log("class added");
//   });
// }
