const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const explode = document.getElementById("explode");
const check = setInterval(() => {
  const p = player.getBoundingClientRect();
  const e = enemy.getBoundingClientRect();
  const distance = Math.abs(p.left - e.left);
  if (distance < 40) {
    enemy.style.animation = "none";
    explode.style.left = player.offsetLeft + "px";
    explode.style.bottom = "20px";
    explode.style.display = "block";
    player.style.display = "none";
    clearInterval(check);
    //restart after 3 seconds
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}, 100);
