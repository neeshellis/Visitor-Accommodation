const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }
// Sequelize will create this table if it doesn't exist on startup
User.init({

id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
username: {
type: DataTypes.STRING, allowNull: false
},
password: {
type: DataTypes.STRING, allowNull: false
},
firstname: {
type: DataTypes.STRING, allowNull: false
},
lastname: {
type: DataTypes.STRING, allowNull: false
},
email: {
type: DataTypes.STRING, allowNull: false, unique: true
},
mobile: {
type: DataTypes.STRING, allowNull: false
},
}, 
{
sequelize: sequelizeInstance, 
modelName: 'user', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = User;