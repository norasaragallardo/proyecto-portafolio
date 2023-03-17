import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";


const Proyecto = db.define('proyecto', {
 
    idproyecto : {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.INTEGER
    },
    iddescripcion: {
      type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    video: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    idusuario: {
        type: DataTypes.BIGINT
    }

    
  },
  
  {
    tableName: 'proyecto'
  })

  Proyecto.belongsTo(Usuario,{
  foreignKey:"idusuario"
})
   
  export default Proyecto;