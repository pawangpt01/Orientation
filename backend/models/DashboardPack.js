const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class DashboardPack extends Model{}

DashboardPack.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
        allowNull:false
    },
    about: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0",
      },
    projects: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0",
      },
    questionnaire: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0"
      },
    joining_kit: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0"
      },
    hr_policies: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0"
      },
    spine_hr: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0"
      },
    floot_map: {
        type: DataTypes.ENUM("0", "1"),
        //values: [0, 1],
        defaultValue: "0"
      },
    other: {
        type: DataTypes.ENUM("0", "1"),
//        values: [0, 1],
        defaultValue: "0"
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:true
      }   
},{
    sequelize:db,
    modelName:"DashboardPack",
    tableName:"dashboard_pack",
    createdAt:"created_at",
    updatedAt: "updated_at",
    underscored: true
})

module.exports =  DashboardPack