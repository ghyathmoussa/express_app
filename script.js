const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');
const error = require('./controllers/error')
const sequelize = require('./utility/database');
const Product = require('./modules/productM');
const Category = require('./modules/categoryM');
const User = require('./modules/user')
const accountRout = require('./routes/account');
const cookieParser = require('cookie-parser');
const session = require('express-session');



app.use(bodyParser.urlencoded({extended:false}))

app.use(cookieParser());

app.use(session({
    secret:"keyboard cat", // like a password for your session
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:true,
        maxAge:36000, // to reset the session after specific time
    }
}));

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next) => {
    if(!req.session.user){
        return next();
    }
    User.findById(req.session.user.id)
        .then(user => {
            req.user = user;
            return next()
        })
})

app.use('/admin',adminRouter);
app.use(userRouter);
app.use(accountRout);

app.set('view engine','pug');
app.set('views','./views')

app.use(error.get404Page);

Product.belongTo(Category,{
    foreignKey:{
        allowNull:false
    }
});
Product.belongTo(User);
User.hasMany(Product);

Category.hasMany(Product)

sequelize.sync()
    .then(() => {

        User.findByPk(1)
            .then(user => {
                if(!user){
                    User.create({name:'Ghyath Moussa',email:'email@gmail.com'});
                }
                return user;
            }).then((user) => {
                Category.count()
            .then(count => {
                if(count === 0 ){
                    Category.bulkCreate([
                        {name:'Computer',description: 'Computer Category'},
                        {name:'Washing Machine',description:'Washing Category'},
                        {name:'Cars',description:'BMW'},
                        ])
                    }
                })
            })

        
        
    })
    .catch(err => console.log(err));

app.listen(9000, () => {
    console.log('listening on port 9000');
});
