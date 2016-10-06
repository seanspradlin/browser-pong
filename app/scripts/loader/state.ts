namespace Loader {
  export class State extends Phaser.State {
    create() {
      console.log('Loading complete');
      this.game.state.start('Main');
    }
  }
}