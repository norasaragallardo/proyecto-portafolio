import { DataTypes } from "sequelize";
import db from "../db/connection";
import Red from './red';
import Usuario from "./usuario";
 
const UsuarioRed = db.define('usuario_red', {
 
  idusuario_red : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },

  idusuario: {
    type: DataTypes.BIGINT,
    
},

  idred: {
    type: DataTypes.BIGINT
  },
  link: {
    type: DataTypes.STRING
  },
 
}, {
  tableName: 'usuario_red'
}) 
UsuarioRed.belongsTo(Red,{
  foreignKey:"idred"
})

UsuarioRed.belongsTo(Usuario,{
  foreignKey:"idusuario"
})
 
export default UsuarioRed;