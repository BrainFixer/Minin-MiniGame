const board = document.querySelector("#board");
const colors = ["pink", "cyan", "lightgreen", "yellow", "coral", "purple"];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => noColor(square));

  board.append(square);
}

function setColor(element) {
  element.style.opacity = `0`;
}

function noColor(element) {}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const sound = new Audio();
sound.src = "108486_321967-lq.mp3";

let timer;
board.addEventListener("mousemove", () => {
  if (soundOn) {
    sound.play();
    clearTimeout(timer);
    timer = setTimeout(() => {
      sound.pause();
    }, 500);
  }
});

let soundOn = false;
const button = document.querySelector("button");
button.addEventListener("click", () => {
  soundOn = !soundOn;
  if (soundOn) {
    button.textContent = "Sound On";
  } else {
    button.textContent = "Sound Off";
  }
});
