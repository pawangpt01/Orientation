const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class JoiningKit extends Model {}

JoiningKit.init({    
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true
      // allowNull defaults to true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
      // allowNull defaults to true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    center_project: {
      type: DataTypes.STRING,
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_husband_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emergency_contact : {
      type: DataTypes.STRING,
      allowNull: true
    },
    relation : {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE", "OTHER"),
      defaultValue: "MALE",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique : 'compositeIndex'
    },
    marital_status: {
      type: DataTypes.ENUM("MARRIED", "UNMARRIED"),
      defaultValue: "UNMARRIED",
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marriage_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    communication_address: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    permanent_address: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    aadhar_no: {
        type:DataTypes.STRING,
        allowNull: true
    },
    pan_no: {
        type:DataTypes.STRING,
        allowNull: true
    },
    passport_no: {
        type:DataTypes.STRING,
        allowNull: true
    },
    passport_validity: {
        type:DataTypes.DATE,
        allowNull: true
    },
    blood_group: {
        type:DataTypes.STRING,
        allowNull: true
    },
    last_ctc: {
        type:DataTypes.FLOAT,
        allowNull: true
    },
    offered_ctc: {
        type:DataTypes.FLOAT,
        allowNull: true
    },
    bank_name: {
        type:DataTypes.STRING,
        allowNull: true
    },
    account_no: {
        type:DataTypes.STRING,
        allowNull: true
    },
    branch_address: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    ifsc_code: {
        type:DataTypes.STRING,
        allowNull: true
    },
    additional_qualifications: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    professional_membership: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    relatives_niua: {
      type: DataTypes.ENUM("1","0"),
      defaultValue: "0",
    },
    relatives_explor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interviewed_by_niua: {
      type: DataTypes.ENUM("1","0"),
      defaultValue: "0",
    },
    interviewed_explor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    criminal_offence: {
      type: DataTypes.ENUM("1","0"),
      defaultValue: "0",
    },
    criminal_explor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medical_problems: {
      type: DataTypes.ENUM("1","0"),
      defaultValue: "0",
    },
    medical_explor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expertise_possess: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    career_trajectory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    awards_accolades: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contract_period_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    contract_period_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  }, {
    // Other model options go here
    sequelize : db, // We need to pass the connection instance
    modelName: 'JoiningKit' ,// We need to choose the model name
    tableName: 'joining_kit',
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored:true
  });


  module.exports = { JoiningKit }