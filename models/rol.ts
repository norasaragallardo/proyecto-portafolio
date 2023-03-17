import { DataTypes } from "sequelize";
import db from "../db/connection";

const Rol = db.define('rol', {
 
    idrrol : {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    }
  },
  
  {
    tableName: 'rol'
  })
   
  export default Rol;