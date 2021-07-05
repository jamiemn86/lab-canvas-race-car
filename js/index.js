const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    drawCar();
  };
};

function startGame() {
  loadBackground();
}

function loadBackground() {
  const img = new Image();
  img.src = '/images/road.png';
  const backgroundImage = {
    img: img,
    x: 0,
    draw: function () {
      ctx.drawImage(this.img, this.x, 0);
    }
  };
  backgroundImage.draw();
  requestAnimationFrame(loadBackground);
}

const carImg = new Image();

carImg.src = '/images/car.png';

const car = {
  img: carImg,
  x: 115,
  y: 320
};

function drawCar() {
  const carOnScreen = {
    draw: function () {
      ctx.drawImage(car.img, car.x, car.y, 50, 90);
    }
  };
  carOnScreen.draw();
  requestAnimationFrame(drawCar);
}

function moveUp() {
  car.y -= 5;
}

function moveDown() {
  car.y += 5;
}

function moveRight() {
  car.x += 5;
}

function moveLeft() {
  car.x -= 5;
}

function enableControls() {
  window.addEventListener('keydown', (event) => {
    const key = event.code;
    switch (key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
    }
  });
}

enableControls();
