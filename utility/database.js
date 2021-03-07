const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'',
    user:'',
    database:'',
    password:''
})

module.exports = connection.promise();

/************* Sequelize ************* */
 
/*
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('database_name','username','password',{
        dialect:'mysql',
        host:'host_name'
    });

    module.exports = sequelize;
*/

