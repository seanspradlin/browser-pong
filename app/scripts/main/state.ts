namespace Main {
  export class State extends Phaser.State {
    leftPaddle: Paddle;

    create() {
      console.log('Game started');
      this.leftPaddle = new Paddle(this.game, 10, 10);
    }
  }
}
