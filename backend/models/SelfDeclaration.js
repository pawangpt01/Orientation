const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class SelfDeclaration extends Model {}

SelfDeclaration.init({    
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
      },
    joining_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    self_declaration_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    self_declaration_fir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    self_declaration_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    self_declaration_action: {
      type: DataTypes.STRING,
      allowNull: true
    },
    self_declaration_status: {
      type: DataTypes.STRING,
      allowNull: true
    }
   
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'SelfDeclaration' ,// We need to choose the model name
    tableName: 'self_declarations',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });


  module.exports = { SelfDeclaration }