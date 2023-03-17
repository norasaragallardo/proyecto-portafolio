import { Sequelize } from 'sequelize';

const db = new Sequelize('bd_portafolio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;