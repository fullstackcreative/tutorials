let x = 0;
let y = 300;

const box = document.querySelector(".box");
const game = document.querySelector(".game");

document.addEventListener("keydown", (e) => {

  if (e.code === "ArrowUp") y -= 10;
  if (e.code === "ArrowDown") y += 10;
  if (e.code === "ArrowLeft") x -= 10;
  if (e.code === "ArrowRight") x += 10;


   // Bounding box calculation
  const maxX = game.clientWidth - box.offsetWidth;
  const maxY = game.clientHeight - box.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));


  // Movement
  box.style.left = x + "px";
  box.style.top = y + "px";

  // to show the key press
  const key = keys[e.code];
  if (key) {
    key.classList.add("active");
  }
});

// to show the key press
const keys = {
  ArrowUp: document.querySelector(".up"),
  ArrowDown: document.querySelector(".down"),
  ArrowLeft: document.querySelector(".left"),
  ArrowRight: document.querySelector(".right"),
};
document.addEventListener("keyup", (e) => {
  const key = keys[e.code];
  if (key) {
    key.classList.remove("active");
  }
});