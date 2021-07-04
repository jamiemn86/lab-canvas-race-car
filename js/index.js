const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    drawCar();
  };
};

function startGame() {
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
  requestAnimationFrame(startGame);
}

function drawCar() {
  const carImg = new Image();
  carImg.src = '/images/car.png';
  const car = {
    img: carImg,
    x: 115,
    y: 280,
    draw: function () {
      ctx.drawImage(this.img, this.x, this.y, 50, 90);
    }
  };
  car.draw();
  requestAnimationFrame(drawCar);
}
