const Sequelize = require("sequelize")

const sequelize = require("../util/database")

const building = sequelize.define("building",{

    Id:{

        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true

    },
    Name:{

        type:Sequelize.STRING,
        allowNull:false
    },
    Owner:{
        type:Sequelize.STRING,
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


module.exports = building;