const audio = document.getElementById("audio");
const container = document.getElementById("visualizer");

const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");

const bars = [];
const TOTAL = 40;

let ctx, analyser, source, dataArray;
let isPlaying = false;
let animationId;


for (let i = 0; i < TOTAL; i++) {
  const bar = document.createElement("div");
  bar.className = "bar";
  container.appendChild(bar);
  bars.push(bar);
}


function start() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = ctx.createAnalyser();

    source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);

    analyser.fftSize = 64;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  }

  audio.play();
  isPlaying = true;

  animate();
}


function animate() {
  if (!isPlaying) return;

  animationId = requestAnimationFrame(animate);

  analyser.getByteFrequencyData(dataArray);

  bars.forEach((bar, i) => {
    const value = dataArray[i] / 255 || 0.01;
    bar.style.transform = `scaleY(${value * 2})`;
  });
}


playBtn.onclick = () => {
  if (audio.paused) {
    start();
    playBtn.innerHTML = "⏸";
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = "▶";
  }
};


stopBtn.onclick = () => {
  audio.pause();
  audio.currentTime = 0;

  isPlaying = false;
  cancelAnimationFrame(animationId);

  playBtn.innerHTML = "▶";

  bars.forEach(bar => {
    bar.style.transform = "scaleY(0)";
  });
};












