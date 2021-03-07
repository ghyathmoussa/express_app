const connection = require('../utility/database')

const categories = [
    {id:'1',name:'Phone',description:'Phone Products Category'},
    {id:'2',name:'Computer',description:'Computer Products Category'},
    {id:'3',name:'Clothes',description:'Clothes Products Category'}
]

module.exports = class categoryM{
    constructor(name,description){
        this.id = categories.length + 1
        this.name = name;
        this.description = description;
    }

    saveCategory(){
        /*
            connection.execute('INSERT INTO (database name)(params) VALUES(?)',[params])
        */
        categories.push(this)
    }
    
    static getAll(){
        /*
            return connection.execute('SELECT * FROM (database name)')
        */
        return categories;
    }

    static getById(id){
        /*
            return connection.execute('SELECT * FROM (database name) WHERE id=?',[id])
        */
        return categories.find(i => i.id == id)
    }

    static update(category) {
        /*
            connection.execute('UPDATE (databasename) SET params ',[params])
        */
        const index = categories.findIndex(i => i.id == category.id)
        categories[index].name = category.name;
        categories[index].description = category.description;
    }

    static deleteById(id){
        /*
            connection.execute('DELETE FROM (database name) WHERE id=?',[id])
        */
        const index = categories.findIndex(i => i.id==id);
        categories.splice(index,1)
    }

}

/********* Sequelize  ***********/
/*
const Sequelize = require('sequelize')
const sequelize = require('../utility/database');
const { STRING } = require('sequelize');

const Category = sequelize.define('category',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    description:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Category 
*/