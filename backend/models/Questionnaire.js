const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class Questionnaire extends Model {}

Questionnaire.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    niua_established: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    niua_vision: {
      type: DataTypes.STRING,
      allowNull: true
    },
    supported_giz: {
      type: DataTypes.STRING,
      allowNull: true
    },
    niua_brief: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fundamentals_approach: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    current_director: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_director: {
      type: DataTypes.STRING,
      allowNull: true
    },
    join_niua: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    international_partner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    your_team_leader: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'Questionnaire' ,// We need to choose the model name
    tableName: 'questionnaires',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });

  module.exports = { Questionnaire }