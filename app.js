const rightArrows = document.querySelectorAll(".right-arrow");
const movieLists = document.querySelectorAll(".movie-list");
const toggleBtn = document.querySelector(".toggle");
const items = document.querySelectorAll(
  ".navbar-container,.sidebar,.left-sidebar-icon,.container,.movie-list-title,.toggle-ball"
);

rightArrows.forEach((arrow, index) => {
  let movieListItemNumber = movieLists[index].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    let ratio = Math.floor(window.innerWidth/270)
    clickCounter += 1;
    let offset = movieListItemNumber - (ratio + clickCounter);
    if (offset >= 0) {
      movieLists[index].style.transform = `translateX(-${
        300 * clickCounter
      }px )`;
    } else {
      clickCounter = 0;
      movieLists[index].style.transform = `translateX(0)`;
    }
  });
});

toggleBtn.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  toggleBtn.classList.toggle("active")
});

console.log(window.innerWidth);
console.log(Math.floor(window.innerWidth/270));