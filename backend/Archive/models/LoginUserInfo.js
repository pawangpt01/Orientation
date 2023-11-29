const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class LoginUserInfo extends Model{}

LoginUserInfo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, 
    allowNull:false,
    field: 'id'
},
username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'username'
},
token: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'token'
},
expire_date: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'expire_date'
},
user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
},  
},{
    sequelize:db,
    modelName:"LoginUserInfo",
    tableName:"login_user_info",
    timestamps: false,
    underscored: true
})

module.exports =  LoginUserInfo