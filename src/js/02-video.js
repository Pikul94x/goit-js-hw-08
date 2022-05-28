import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const callback = function (data) {
//   console.log(data.seconds);

  localStorage.setItem('videoplayer-current-time', data.seconds);
}
const throttledCallback = throttle(callback, 1000);

player.on('timeupdate', throttledCallback);

const currentTime = localStorage.getItem('videoplayer-current-time');
// console.log(currentTime);

player.setCurrentTime(currentTime);



