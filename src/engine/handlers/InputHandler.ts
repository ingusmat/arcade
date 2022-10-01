class InputHandler {
  public keys: string[];
  private readonly arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const { key } = e;
      if (this.arrowKeys.includes(key) && this.keys.indexOf(key) === -1) {
        this.keys.push(key);
      }
    });
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      const { key } = e;
      if (this.arrowKeys.includes(key)) {
        this.keys.splice(this.keys.indexOf(key), 1);
      }
    });
  }
}

export default InputHandler;
