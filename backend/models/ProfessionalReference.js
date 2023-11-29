const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class ProfessionalReference extends Model {}

ProfessionalReference.init({
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
    ref_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_designation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ref_organization_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ref_contact_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ref_email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'ProfessionalReference' ,// We need to choose the model name
    tableName: 'professional_references',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });

  module.exports = { ProfessionalReference }