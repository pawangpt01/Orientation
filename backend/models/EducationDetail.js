const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class EducationDetail extends Model {}

EducationDetail.init({
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
    edu_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    edu_university: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edu_year: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edu_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'EducationDetail' ,// We need to choose the model name
    tableName: 'education_details',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });

  module.exports = { EducationDetail }