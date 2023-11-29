const { Model, DataTypes } = require("sequelize");
const { db } = require("../utils/db.util");

class UserRole extends Model{}

UserRole.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        },
   
},{
    sequelize:db,
    modelName:"UserRole",
    tableName:"user_roles",
    createdAt:"created_at",
    updatedAt: "updated_at",
    underscored: true
})

module.exports = { UserRole}