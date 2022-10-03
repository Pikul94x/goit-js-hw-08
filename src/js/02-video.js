import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    console.log(seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

try {
  const videoTime = localStorage.getItem('videoplayer-current-time');
  const parsedVideoTime = JSON.parse(videoTime);
  player.setCurrentTime(parsedVideoTime);
} catch (error) {
  console.log(error);
}
