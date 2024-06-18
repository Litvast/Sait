const audioPlayer = document.querySelector('.audio-element');
const playPauseBtn = document.querySelector('.play-pause-btn');
const muteBtn = document.querySelector('.mute-btn');
const volumeSlider = document.querySelector('.volume-slider');
const progressBar = document.querySelector('.progress-bar');
const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');

let isPlaying = false;
let isMuted = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audioPlayer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});

muteBtn.addEventListener('click', () => {
  if (isMuted) {
    audioPlayer.muted = false;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    audioPlayer.muted = true;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
  isMuted = !isMuted;
});

volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value;
});

progressBar.addEventListener('input', () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  const progressPercentage = (currentTime / duration) * 100;

  progressBar.value = progressPercentage;
  currentTimeElement.textContent = formatTime(currentTime);
  durationElement.textContent = formatTime(duration);
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}