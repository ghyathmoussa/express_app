const Product = require('../modules/productM');
const Category = require('../modules/categoryM');

exports.getIndex = (req, res, next) => {
    /**** Sequelize ****/
    /*
        Product.findAll()
            .then(products => {
                res.render('index',{
                    title:'Shopping',
                    products:products,
                    categories:categories,
                    path:'/'
                });
            }).catch(err => console.log(err))
    */

    /*
        Product.getAll()
            .then(products => {
                res.render('index',{
                    title:'Shopping',
                    products:products,
                    categories:categories,
                    path:'/'
                });
            }).catch(err => console.log(err))
    */

    const products = Product.getAll();
    const categories = Category.getAll()
    res.render('index',{
        title:'Shopping',
        products:products,
        categories:categories,
        isAuthenticated:req.session.isAuthenticated,
        path:'/'
    });
}

exports.getProducts = (req, res, next) => {

    /**** Sequelize ****/
    
    /*
        Product.findAll()
            .then(products => {
                res.render('products',{
                    title:'Products',
                    products:products,
                    categories:categories,
                    path:'/product'
                });
            }).catch(err => console.log(err))
    */

    /*
        Product.getAll()
            .then(products => {
                res.render('index',{
                    title:'Products',
                    products:products[0],
                    categories:categories,
                    path:'/product'
                });
            }).catch(err => console.log(err))
    */

    const products = Product.getAll();
    const categories = Category.getAll()
    res.render('products',{
        title:'Products',
        products:products,
        categories:categories,
        isAuthenticated:req.session.isAuthenticated,
        path:'/product'
    });
}

exports.getProduct = (req, res, next) => {

    /**** Sequelize ****/ 
    /*
        Product.findByPk(req.params.productId)
            .then(
                product => {
                    res.render('details',{
                        title:product.name,
                        product:product,
                        path:'/details'
                    })
                }
            )
            .catch(err=>console.log(err))
    */

    /*
        Product.getById(req.params.productId)
            .then(
                product => {
                    res.render('details',{
                        title:product[0][0].name,
                        product:product[0][0],
                        path:'/details'
                    })
                }
            )
            .catch(err=>console.log(err))
    */
    const productID = req.params.productId;
    const product = Product.getById(productID);
    res.render('details',{
        title:product.name,
        product:product,
        isAuthenticated:req.session.isAuthenticated,
        path:'/product'
    });
}

exports.getProductByCategoryId = (req, res, next) => {
    const categoryId = req.params.categoryId;
    const product = Product.getProductsByCatId(categoryId);
    const categories = Category.getAll()
    res.render('products',{
        title:'Products',
        products:product,
        categories:categories,
        selectedCat:categoryId,
        isAuthenticated:req.session.isAuthenticated,
        path:'/product'
    });
}


exports.getDetails = (req, res, next) => {
    res.render('details',{
        title:'Details',
        isAuthenticated:req.session.isAuthenticated,
        path:'/details'
    });
}

exports.getCart = (req, res, next) => {
    res.render('cart',{
        title:'Cart',
        isAuthenticated:req.session.isAuthenticated,
        path:'/cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('orders',{
        title:'Orders',
        isAuthenticated:req.session.isAuthenticated,
        path:'/orders'
    });
}
