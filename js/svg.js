var circle = document.querySelector("#circle");
var square = document.querySelector("#sqaure");
var triangle = document.querySelector("#tri");

var xPos1 = 0;
var xPos2 = 0;
var xPos3 = 0;
var pause = false;

function animate() {
  if (!pause) {
    xPos1 += 10;
    xPos2 += 5;
    xPos3 += 8;
    circle.style.transform = `translate3d(${xPos1}px, 0, 0)`;
    triangle.style.transform = `translate3d(${xPos2}px, 0, 0)`;
    sqaure.style.transform = `translate3d(${xPos3}px, 0, 0)`;

    if (Math.abs(xPos1) >= 1300) {
      xPos1 = -500;
    }
    if (Math.abs(xPos2) >= 1300) {
      xPos2 = -500;
    }
    if (Math.abs(xPos3) >= 1300) {
      xPos3 = -500;
    }
    requestAnimationFrame(animate);
  } else {
  }
}

animate();

document.addEventListener("click", function (event) {
  pause = !pause;
  animate();
});
