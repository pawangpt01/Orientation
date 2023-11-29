const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class NomineeDetail extends Model {}

NomineeDetail.init({    
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
    nominee_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nominee_relation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nominee_dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nominee_amt_share: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nominee_minority: {
      type: DataTypes.TEXT,
      allowNull: true
    }
   
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'NomineeDetail' ,// We need to choose the model name
    tableName: 'nominee_details',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });


  module.exports = { NomineeDetail }