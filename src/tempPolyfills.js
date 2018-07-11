/* eslint-disable no-console, no-param-reassign */

const requestAnimationFrame = global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

export default requestAnimationFrame;
