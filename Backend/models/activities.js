const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Activities extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");
const Booking = require("./booking");

Activities.init({

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
bookingid: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Booking, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
activity: {
type: DataTypes.STRING, allowNull: false
},
preferreddate: {
type: DataTypes.DATE, allowNull: false
},
numberofguests: {
type: DataTypes.INTEGER, allowNull: false
},
}, 
{
sequelize: sequelizeInstance, 
modelName: 'activities', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Activities;