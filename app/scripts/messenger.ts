/// <reference path="../../typings/index.d.ts" />
class Messenger {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
  }
}
