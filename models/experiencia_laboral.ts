import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from './usuario';

 
const ExperienciaLaboral = db.define('experiencia_laboral', {
 
  idexperiencia_laboral : {
    type: DataTypes.BIGINT,
    autoIncrement: false,
    primaryKey: true
  },
  fecha_inicio: {
    type: DataTypes.DATE
    },
  fecha_fin: {
    type: DataTypes.DATE
  },
  direccion: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  },
  idusuario: {
    type: DataTypes.BIGINT
  }
}, 

{
  tableName: 'experiencia_laboral'
}) 
ExperienciaLaboral.belongsTo(Usuario,{
  foreignKey:"idusuario"
})

 
export default ExperienciaLaboral;