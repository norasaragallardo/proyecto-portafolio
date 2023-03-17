import { DataTypes } from "sequelize";
import db from "../db/connection";

const Habilidad = db.define('habilidad', {
 
    idhabilidad : {
      type: DataTypes.BIGINT,
      autoIncrement: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    correo: {
      type: DataTypes.STRING
    }
  },
  
  {
    tableName: 'habilidad'
  })
   
  export default Habilidad;