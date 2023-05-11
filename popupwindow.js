
const videoPlayer = document.getElementById('video');
const fullscreenButton = document.getElementById('fullscreen-button');

fullscreenButton.addEventListener('click', () => {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
    videoPlayer.msRequestFullscreen();
  }
});
