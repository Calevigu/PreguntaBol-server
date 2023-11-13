const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Category",
      {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
      },
  
      { timestamps: false }
    );
};