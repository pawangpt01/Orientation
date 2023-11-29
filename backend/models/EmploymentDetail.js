const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class EmploymentDetail extends Model {}

EmploymentDetail.init({    
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
    emp_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    emp_designation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emp_contact_detail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emp_from: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_to: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_leaving: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'EmploymentDetail' ,// We need to choose the model name
    tableName: 'employment_details',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });


  module.exports = { EmploymentDetail }