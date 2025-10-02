const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Review extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");
const Accommodation = require("./accommodation");
const Booking = require("./booking");


Review.init({

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

bookingid: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Booking, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },

datein: {
type: DataTypes.DATE, allowNull: false
},

review: {
type: DataTypes.STRING, allowNull: false
},

rating: {
type: DataTypes.INTEGER, allowNull: false
},

}, {
sequelize: sequelizeInstance, 
modelName: 'review', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Review;