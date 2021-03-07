const connection = require('../utility/database')

const product = [
    { id: '123123',name: 'Samsung S6', price: '2000', image: '1.jpg', description: 'iyi telefon',categoryid:'1' },
    { id: '123124',name: 'Samsung S7', price: '3000', image: '2.jpg', description: 'iyi telefon',categoryid:'1' },
    { id: '123125',name: 'Samsung S8', price: '4000', image: '3.jpg', description: 'iyi telefon',categoryid:'1' },
    { id: '123126',name: 'Lenovo', price: '4000', image: '3.jpg', description: 'iyi telefon',categoryid:'2' },
    { id: '123127',name: 'Freezer', price: '4000', image: '3.jpg', description: 'iyi telefon',categoryid:'3' },

];

module.exports = class ProductM {
    constructor(name,price,image,description){
        this.id = (Math.floor(Math.random() * 99999) + 1).toString()
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description 
    }

    saveProduct(){
        /*
            connection.execute('INSERT INTO (database name) (name of columns) VALUES (? * num of variables)',[this])
        */
        product.push(this)
    }

    static getAll(){

        /*
            return connection.execute('SELECT * FROM (database name)')
        */

        return product
    }

    static getById(id){
        /*
            connection.execute('SELECT * FROM (database name) WHERE data.id=?',[id])
        */
        const pro = product.find(i => i.id == id);
        return pro;
    }
    static update(pro){
        /*
            connection.execute('UPDATE (database) SET ')
        */
        const index = product.findIndex(i=>i.id == pro.id);
        product[index].name = pro.name;
        product[index].price = pro.price;
        product[index].image = pro.image;
        product[index].categoryid=pro.categoryid;
        product[index].description = pro.description;
    }
    static DeleteById(id){
        /*
            connection.execute('DELETE FROM (database) WHERE id=?',[id])
        */
        const index = product.findIndex(i => i.id == id)
        product.splice(index,1)
    }

    static getProductsByCatId(id){
        return product.filter(i => i.categoryid == id)
    }
} 

/********* Sequelize  ***********/
/*
const Sequelize = require('sequelize')
const sequelize = require('../utility/database');
const { STRING } = require('sequelize');

const Product = sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false 
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Product
*/