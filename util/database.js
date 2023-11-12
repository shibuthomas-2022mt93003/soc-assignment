const Sequelize = require("sequelize")


const sequelize = new Sequelize("visitordb","root","Password123",{dialect: 'mysql', host:"localhost" ,define: {timestamps: false},},   )



module.exports = sequelize;