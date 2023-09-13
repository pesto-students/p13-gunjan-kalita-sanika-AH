let timerId = null;

window.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
  // Get mouse coordinates
  let clickX = e.clientX;
  let clickY = e.clientY;

  if (timerId !== null) {
    //user clicked again before the previous move was complete
    clearInterval(timerId);
  }

  timerId = setInterval(moveImage, 10, clickX, clickY);
}

function moveImage(x, y) {
  const img = document.querySelector("img");

  // Determine location of image
  let imgX = parseInt(img.style.left);
  let imgY = parseInt(img.style.top);

  // Determine (x,y) coordinates that center the image
  // around the clicked (x, y) coords
  const centerX = Math.round(x - img.width / 2);
  const centerY = Math.round(y - img.height / 2);

  if (imgX === centerX && imgY === centerY) {
    clearInterval(timerId);
    timerId = null;
  } else {
    // Move 1 pixel in both directions toward the click
    if (imgX < centerX) {
      imgX++;
    } else if (imgX > centerX) {
      imgX--;
    }

    if (imgY < centerY) {
      imgY++;
    } else if (imgY > centerY) {
      imgY--;
    }

    img.style.left = imgX + "px";
    img.style.top = imgY + "px";
  }
}
