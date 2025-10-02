const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Contact extends Model { }
// Sequelize will create this table if it doesn't exist on startup

// const User=require("./user");
// const Accommodation = require("./accommodation");
// const { Contact } = require(".");

Contact.init({

id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
firstname: {
type: DataTypes.STRING, allowNull: false
},
lastname: {
type: DataTypes.STRING, allowNull: false
},
email: {
type: DataTypes.STRING, allowNull: false
},
mobile: {
type: DataTypes.STRING, allowNull: false
},
inquiry: {
type: DataTypes.STRING, allowNull: false
},

}, {
sequelize: sequelizeInstance, 
modelName: 'contact', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Contact;