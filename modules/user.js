const Sequelize = require('sequelize');
const sequelize = require('../utility/database');

const User = sequelize.define('user',{
    id:{
        id:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        required:true
    },
    email:{
        type:Sequelize.STRING,
        required:true
    },
    password:{
        type:Sequelize.STRING,
        required:true
    }
})

module.exports = User;
