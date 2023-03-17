import { DataTypes } from "sequelize";
import db from "../db/connection";
import Habilidad from './habilidad';

const Conocimiento = db.define('conocimiento', {
 
    idconocimiento : {
      type: DataTypes.BIGINT,
      autoIncrement: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.INTEGER
    },
    idhabilidad: {
      type: DataTypes.BIGINT
    },
    telefono: {
        type: DataTypes.STRING
    }
    
  },
  
  {
    tableName: 'conocimiento'
  })

  Conocimiento.belongsTo(Habilidad,{
  foreignKey:"idhabilidad"
})
   
  export default Conocimiento;