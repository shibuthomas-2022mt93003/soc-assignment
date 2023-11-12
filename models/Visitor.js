const Sequelize = require("sequelize")

const sequelize = require("../util/database");
const { options } = require("../routes/BuildingRoute");

const visitor = sequelize.define("visitor",{

    Id:{

        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true

    },
    Name:{

        type:Sequelize.STRING,
        allowNull:false
    },
    DateOfVisit:{
        type:Sequelize.DATE,
        allowNull:false
    },
   
    BuildingId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
   
},
{

    initialAutoIncrement: 1

}, 
{
    timestamps: false
}

   
);


module.exports = visitor;