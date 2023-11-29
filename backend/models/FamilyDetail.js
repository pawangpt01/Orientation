const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class FamilyDetail extends Model {}

FamilyDetail.init({    
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
    family_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    familydob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    relation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
   

  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'FamilyDetail' ,// We need to choose the model name
    tableName: 'family_details',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });


  module.exports = { FamilyDetail }