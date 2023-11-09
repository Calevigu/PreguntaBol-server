const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Sport",
      {
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true
        },
        pregunta:{
            type:DataTypes.STRING,
            allowNull:false
        },
        respuestas:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        respuesta_correcta:{
            type:DataTypes.STRING,
            allowNull:false
        }
      },
  
      { timestamps: false }
    );
};