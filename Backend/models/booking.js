const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Booking extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");
const Accommodation = require("./accommodation");

Booking.init({

id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
userid: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: User, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
accommodationid: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Accommodation, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },

quantityofguests: {
type: DataTypes.INTEGER, allowNull: false
},
datein: {
type: DataTypes.DATE, allowNull: false
},
dateout: {
type: DataTypes.DATE, allowNull: false
},
price: {
type: DataTypes.INTEGER, allowNull: false
},

}, {
sequelize: sequelizeInstance, 
modelName: 'booking', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Booking;