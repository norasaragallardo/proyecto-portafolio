import { DataTypes } from "sequelize";
import db from "../db/connection";

const Contactenos = db.define('contactenos', {
 
    idcontactenos : {
      type: DataTypes.BIGINT,
      autoIncrement: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    correo: {
      type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
    
  },
  
  {
    tableName: 'contactenos'
  })
   
  export default Contactenos;