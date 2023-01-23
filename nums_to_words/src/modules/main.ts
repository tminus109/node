import convertNumToPhrase from "./convertNumToPhrase.js";

const numInput = document.querySelector("#num-input");
const words = document.querySelector("#words");
const video = document.querySelector("video");
const playBtn = document.querySelector("#play-btn");
const moodBtn = document.querySelector("#mood-btn");

const videos = ["turtle.mp4", "red-panda.mp4", "manta.mp4", "cranes.mp4"];
const l = videos.length - 1;
let nextVid = 0;

numInput?.addEventListener("input", convertInputToWords);
playBtn?.addEventListener("click", playPauseVideo);
moodBtn?.addEventListener("click", setMood);

function convertInputToWords(e: Event) {
  const input = (e.target as HTMLInputElement).value;
  if (!input) {
    words!.textContent = "";
  }
  words!.textContent = convertNumToPhrase(input);
}

function playPauseVideo() {
  if (video?.paused) {
    playBtn?.setAttribute("data-icon", "u");
    video.play();
  } else {
    playBtn?.setAttribute("data-icon", "P");
    video?.pause();
  }
}

function setMood() {
  if (nextVid === l) {
    nextVid = 0;
  } else {
    nextVid++;
  }
  video?.setAttribute("src", videos[nextVid]);
  playBtn?.setAttribute("data-icon", "u");
}
