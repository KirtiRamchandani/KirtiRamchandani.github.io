onmessage = function (event) {
  event.data.forEach((image, index) => {
    postMessage([image.src, index]);
  });
};
