class Messenger {
  socket: SocketIOClient.Socket;
  sessionId: number;

  constructor() {
    this.socket = io();
  }


}
