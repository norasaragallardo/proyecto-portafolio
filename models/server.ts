import express, { Application } from 'express';
import db from '../db/connection';
import userRoutes from '../routes/usuarios';
import Contactenos from './contactenos';
import contactenosRouter from '../routes/contactenos';
import UsuarioRedrouter from '../routes/usuarios_red';

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    usuarios: '/api/usuarios',
    usuarios_red: '/api/usuarios-red',
    contactenos: '/api/contactenos',
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares(){
    this.app.use( express.json() );
  }

  routes(){
    this.app.use(this.apiPaths.usuarios, userRoutes)
    this.app.use(this.apiPaths.contactenos, contactenosRouter)
    this.app.use(this.apiPaths.usuarios_red, UsuarioRedrouter)
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
    })
  }
}

export default Server;