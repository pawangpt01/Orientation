const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        // unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        // unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    
},{
    sequelize:db,
    modelName:"User",
    tableName:"users",
    createdAt:"created_at",
    updatedAt: "updated_at",
    underscored: true
})

module.exports = { User}