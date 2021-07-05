// Iteration 1

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    drawCar();
    drawObstacle();
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

// Iteration 2

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

// Iteration 3

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

// Iteration 4

class Obstacle {
  constructor(x, y, width, height) {
    (this.x = x), (this.y = y), (this.width = width), (this.height = height);
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function drawObstacle() {
  const testObstacle = new Obstacle();
  testObstacle.x = 115;
  testObstacle.y = 0;
  testObstacle.width = 80;
  testObstacle.height = 10;
  testObstacle.draw();
  requestAnimationFrame(drawObstacle);
}
