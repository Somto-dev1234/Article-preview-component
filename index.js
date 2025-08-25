const shareBtn = document.querySelector(".share__button");
const share = document.querySelector(".share");

shareBtn.addEventListener("click", () => {
  share.classList.toggle("active");
});
