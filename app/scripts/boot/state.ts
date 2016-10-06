namespace Boot {
  export class State extends Phaser.State {
    preload() {
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.stage.backgroundColor = 0x88c070;
    }

    create() {
      console.log('Boot complete');
      this.game.stage.smoothed = false;
      this.game.state.start('Loader');
    }
  }
}

