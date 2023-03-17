import { DataTypes } from "sequelize";
import db from "../db/connection";

const Red = db.define('red', {
 
    idred : {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    icono: {
      type: DataTypes.STRING
    }
    
  },
  
  {
    tableName: 'red'
  })
   
  export default Red;