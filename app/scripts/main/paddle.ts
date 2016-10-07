namespace Main {
  export class Paddle extends Phaser.Graphics {
    constructor(game: BrowserPong, x: number, y: number) {
      super(game, x, y);
      this.beginFill(0x081820);
      this.drawRect(0, 0, 10, 50);
      game.add.existing(this);
    }

    up(): void {
      if (this.y > 0) {
        this.y--;
      }
    }

    down(): void {
      if (this.y < (this.game.stage.height - this.height)) {
        this.y++;
      }
    }
  }
}

