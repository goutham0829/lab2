const EventEmitter = require('node:events');
const eventEmit = new EventEmitter();
eventEmit.once('event', () => {
    console.log("only for first time");
  });
eventEmit.emit('event');
eventEmit.emit('event');