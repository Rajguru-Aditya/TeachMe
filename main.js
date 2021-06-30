//Form
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#selectDays");
const slotBtns = document.querySelectorAll(".btn-check");
const submitBtn = document.querySelector("#submitBtn");

//Modal
const modal = document.querySelector(".myModal");
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

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
