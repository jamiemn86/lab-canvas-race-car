const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
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
