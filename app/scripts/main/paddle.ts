namespace Main {
  export class Paddle extends Phaser.Graphics {
    constructor(game: BrowserPong, x: number, y: number) {
      super(game);
      this.beginFill(0x081820);
      this.drawRect(x, y, 20, 100);
    }
  }
}

