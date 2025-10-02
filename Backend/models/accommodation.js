const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Accommodation extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");

Accommodation.init({

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
property: {
type: DataTypes.STRING, allowNull: false
},
address: {
type: DataTypes.STRING, allowNull: false
},
maxguests: {
type: DataTypes.INTEGER, allowNull: false
},
}, 
{
sequelize: sequelizeInstance, 
modelName: 'accommodation', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Accommodation;