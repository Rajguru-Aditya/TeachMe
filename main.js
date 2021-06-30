//Form
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#selectDays");
const slotBtns = document.querySelectorAll(".btn-check");
const submitBtn = document.querySelector("#submitBtn");

//Modal
const modal = document.querySelector("#slotsModal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".closeModal");
const btnOpenModal = document.querySelector(".showModal");

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

submitBtn.addEventListener("click", showAlert);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
