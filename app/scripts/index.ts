class BrowserPong extends Phaser.Game {
  constructor() {
    super(320, 180, Phaser.AUTO, '', null, false, false);
    this.state.add('Boot', Boot.State);
    this.state.add('Loader', Loader.State);
    this.state.add('Main', Main.State);
    this.state.start('Boot');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new BrowserPong();
});
