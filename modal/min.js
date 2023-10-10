const modal = document.querySelector("#modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const overlay = document.querySelector("#overlay");

openBtn.addEventListener("click", function () {
  modal.classList.add("open");
  overlay.classList.add("open");
  console.log("essas");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

overlay.addEventListener("click", function () {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
