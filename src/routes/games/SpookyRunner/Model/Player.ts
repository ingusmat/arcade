import InputHandler from '../../../engine/handlers/InputHandler';

class Player {
  public gameWidth: number;
  public gameHeight: number;
  public x: number = 0;
  public y: number = 0;
  public width: number = 200;
  public height: number = 200;
  public image: HTMLImageElement;
  public frameX: number = 0;
  public frameY: number = 0;
  public deltaX: number = 0;
  public deltaY: number = 0;
  public gravity: number = 2;
  constructor(gameWidth: number, gameHeight: number) {
    this.image = document.getElementById('playerImage') as HTMLImageElement;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.y = this.gameHeight - this.height;
    this.x = 0;
  }

  public draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = 'white';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  public update = (input: InputHandler) => {
    const newX = this.x + this.deltaX;
    if (newX < 0) {
      this.x = 0;
    } else if (newX + this.width > this.gameWidth) {
      this.x = this.gameWidth - this.width;
    } else {
      this.x = newX;
    }

    this.y += this.deltaY;
    const isOnGround = this.getIsOnGround();

    const { keys } = input;
    if (isOnGround) {
      if (keys.includes('ArrowUp')) {
        this.deltaY = -30;
      } else {
        this.deltaY = 0;
      }

      if (keys.includes('ArrowLeft') && this.x > 0) {
        this.deltaX = -5;
      } else if (keys.includes('ArrowRight') && this.x < this.gameWidth - this.width) {
        this.deltaX = 5;
      } else {
        this.deltaX = 0;
      }
    } else {
      this.deltaY += this.gravity;
    }

  }

  public getIsOnGround = () => {
    return this.y >= this.gameHeight - this.height;   
  }
}

export default Player;

