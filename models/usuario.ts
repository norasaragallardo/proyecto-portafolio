import { DataTypes } from "sequelize";
import db from "../db/connection";
import Rol from "./rol";
import Proyecto from './proyecto';
 
const Usuario = db.define('usuario', {
 
  idusuario : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  contrasenia: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.TINYINT
  },
  edad: {
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.STRING
  },
  idrol: {
    type: DataTypes.BIGINT
  }
}, {
  tableName: 'usuario'
})
Usuario.belongsTo(Rol,{
  foreignKey:"idrol"
})
//Usuario.hasMany(Proyecto,{
 // foreignKey:"idproyecto"
//})

 
export default Usuario;