// Sucrase ou babel permite a importação com a sintaxe abaixo
// yarn sucrase nodemon -D

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server;
// Com o sucrese podemos usar a sintaxe abaixo
export default new App().server;
