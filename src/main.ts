import './style.css'
import InputHandler from './engine/handlers/InputHandler';
import Player from './games/SpookyRunner/Model/Player';

window.addEventListener('load', function() {
  console.log('loaded');
  const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
  canvas.width = 800;
  canvas.height = 720;


  class Background {

  }

  class Enemy {

  }

  function handleEnemies() {

  }

  function displayStatusText() {

  }

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.draw(ctx);
    player.update(input);
    requestAnimationFrame(animate);
  }

  animate();
})

