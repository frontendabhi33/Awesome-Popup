const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".closeBtn");
const popupContainer = document.querySelector(".popup");
const submitBtn = document.querySelector(".submit");

openButton.addEventListener("click", () => {
  popupContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});

submitBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});
