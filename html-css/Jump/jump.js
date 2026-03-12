const spaceKey = document.getElementById("spaceKey");
const player = document.getElementById("player");
document.addEventListener("keydown", (e)=>{
  if(e.code === "Space"){
    spaceKey.classList.add("active");
    player.classList.add("jump");
    setTimeout(()=>{
      player.classList.remove("jump");
    },600);
  }
});

document.addEventListener("keyup", (e)=>{
  if(e.code === "Space"){
    spaceKey.classList.remove("active");
  }
});