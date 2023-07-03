const starsE1 = document.querySelectorAll(".fa-star");

const emojiE1 = document.querySelectorAll(".fa-regular");
const array = ["red", "orange", "skyblue", "lightgreen", "green"];

console.log(starsE1);

starsE1.forEach(function (star, index) {
  star.addEventListener("click", function () {
    updateRating(index);
  });
});

function updateRating(index) {
  console.log(index);

  starsE1.forEach(function (star, idx) {
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emojiE1.forEach(function (emoji) {
    emoji.style.transform = `translateX(-${index * 48}px)`;
    emoji.style.color = array[index];
  });
}
