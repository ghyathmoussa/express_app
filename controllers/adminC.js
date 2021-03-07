const Product = require('../modules/productM');
const Category = require('../modules/categoryM');

exports.getProductsList = (req, res, next) => {
    /**** Sequelize ****/
    /*
        Product.findAll()
            .then(products => {
                res.render('product-list',{
                    title:'Product List',
                    products:products,
                    categories:categories,
                    path:'admin/product-list',
                    action: req.query.action
                });
            }).catch(err => console.log(err))
    */
    /*
        Product.getAll()
            .then(products => {
                res.render('product-list',{
                    title:'Product List',
                    products:product,
                    categories:categories,
                    path:'admin/product-list',
                    action: req.query.action
                });
            }).catch(err => console.log(err))
    */
    const product = Product.getAll();
    const categories = Category.getAll();
    res.render('product-list',{
        title:'Product List',
        products:product,
        categories:categories,
        path:'admin/product-list',
        action: req.query.action
    })
}

exports.addProduct = (req, res, next) => {
    /*
    if(!res.session.isAuthentication){
        return res.redirect('/login')
    }
        Category.getAll()
            .then((categories) => {
                res.render('add-product',{
                title:'Add New Product',
                categories:categories[],
                path:'admin/add-product',
                isAuthentication:res.session.isAuthentication
            })
            })
            .catch(err => console.log(err))
    */
    const categories = Category.getAll();
    res.render('add-product',{
        title:'Add New Product',
        categories:categories,
        path:'admin/add-product'
    })
}

exports.postProduct = (req, res, next) => {
    // database kayıt
    /*
    const product = new Product(
        req.body.productName,
        req.body.productPrice,
        req.body.productImage,
        req.body.categoryid,
        req.body.productDes
        );
        product.saveProduct().then(() => {
            res.redirect('/');
        }).catch(err => console.log(err))
    */

    /* Sequelize */
    /*
        const name = req.body.productName,
        const price = req.body.productPrice,
        const image = req.body.productImage,
        const cartegoryid = req.body.categoryid,
        const description = req.body.productDes
        Product.create({
            name :name,
            price:price,
            image = image,
            description = description
        }).then(
            res => res.console.log(res)
            res.redirect('/');
        ).catch(err => console.log(err))


    */
    const product = new Product(
        req.body.productName,
        req.body.productPrice,
        req.body.productImage,
        req.body.categoryid,
        req.body.productDes
        );
        product.saveProduct()
    res.redirect('/');
}

exports.editProduct = (req, res, next) => {

    /**** Sequelize ****/ 
    /*
        Product.findByPk(req.params.productId)
            .then(
                product => {
                    if(!product){
                        return res.redirect('/')
                    }
                    res.render('edit-product',{
                        title:Edit Product,
                        product:product,
                        category:category,
                        path:'/edit-product'
                    })
                }
            )
            .catch(err=>console.log(err))
    */

    /*
        Product.getById(req.params.productid)
            .then(product=>{
                Category.getAll().
                    then(categories => {
                        res.render('edit-product',{
                        title:'Edit Product',
                        path:'admin/edit-product',
                        product:product[0][0],
                        categories:categories[]
                        })
                    }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    */
    const categories = Category.getAll();
    const product = Product.getById(req.params.productid)

    res.render('edit-product',{
        title:'Edit Product',
        path:'admin/edit-product',
        product:product,
        categories:categories
    })
}

exports.postEditProduct = (req, res, next) => {
    /*
        const product = new Product();
        const product = Product.getById(req.body.Id);
        console.log(req.body.Id)
        product.name = req.body.productName;
        product.price = req.body.productPrice;
        product.image = req.body.productImage;
        product.categoryid = req.body.categoryid;
        product.description = req.body.productDes;
        Product.update(product)
            .then(() => {
                res.redirect('/admin/product-list?action=edit');
            }).catch(err=> console.log(err))
        
    */

    /**** Sequelize ****/
    /*
        const id = req.body.id
        const name = req.body.productName;
        const price = req.body.productPrice;
        const image = req.body.productImage;
        const categoryid = req.body.categoryid;
        const description = req.body.productDes;

        Product.findByPk(id)
            .then(product => {
                product.name = name;
                product.price = price;
                product.image = image;
                product.categoryid = categoryid;
                product.description = description;
                return product.save();
            }).then(result => {
                console.log('updated');
                res.redirect('/admin/product-list?action=edit');
            })
            .catch(err => console.log(err))
    */
    const categories = Category.getAll();

    // database kayıt
    const product = Product.getById(req.body.Id);
    console.log(req.body.Id)
    product.name = req.body.productName;
    product.price = req.body.productPrice;
    product.image = req.body.productImage;
    product.categoryid = req.body.categoryid;
    product.description = req.body.productDes;
    Product.update(product)
    res.redirect('/admin/product-list?action=edit');
}

exports.deleteProduct = (req,res,next) => {

    /**** Sequelize ****/
    /*
        const id = req.body.productId;
        Product.destroy({where:{id:id}})
            .then(() => {
                res.redirect('/admin/product-list?action=delete')
            })
            .catch(err => console.log(err))
    */

    /*
        Product.DeleteById(req.body.productid)
            .then(() => {
                res.redirect('/admin/product-list?action=delete');
            })
            .catch(err => console.log(err))
    */
    Product.DeleteById(req.body.productid)
    res.redirect('/admin/product-list?action=delete')
}

