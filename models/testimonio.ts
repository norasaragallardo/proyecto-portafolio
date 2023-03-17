import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from './usuario';

 
const Testimonio = db.define('testimonio', {
 
  idtestimonio : {
    type: DataTypes.BIGINT,
    autoIncrement: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    },
  descripcion: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.DATE
  },
  idusuario: {
    type: DataTypes.BIGINT
  }
 
}, {
  tableName: 'testimonio'
}) 
Testimonio.belongsTo(Usuario,{
  foreignKey:"idusuario"
})

 
export default Testimonio;