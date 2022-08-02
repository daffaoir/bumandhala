const button = document.getElementById("button");
const moreCard = document.getElementById("more");
button.addEventListener("click", function () {
  button.remove();
  moreCard.classList.remove("d-none");
});
