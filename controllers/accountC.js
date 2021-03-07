const User = require('../modules/user');
const bcrypt = require('bcrypt');

// get log in pages
exports.getLogin = (req,res,next) => {
    res.render('account/login',{
        path:'/login',
        title:'Log In',

    });
}
//post lg in page
exports.postLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    /* we have a database so we must loop on all the emails and password
        to get the correct log in process or the gust can not show his own features
        this example just to show how to create correct log in process: -|
        if(email == 'lab@mail.com' && password == '12345){
            //req.isAuthenticated = true;

            // res.cookie('isAuthenticated',true);

            req.session.isAuthenticated = true;

            let url = req.session.redirectTo ? req.session.redirectTo : '/';
            delete req.session.redirectTo;

            res.redirect(url);
        }else{
            //req.isAuthenticated = false;

            res.cookie('isAuthenticated',true)

            redirect('/login')
        }
    */
        User.findOne({email:email})
            .then(user => {
                if(!user){
                    return redirect('/login');
                }
                bcrypt.compare(password,user.password)
                    .then(isSuccess => {
                        if(isSuccess){
                            req.session.user = user;
                            req.session.isAuthenticated = true;
                            return req.session.save(function(err){
                                console.log(err);
                                res.redirect('/');
                            })
                        }
                        res.redirect('/login');
                    }).catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    res.redirect('/')
}
//get register page
exports.getRegister = (req,res,next) => {
    res.render('account/register',{
        path:'/register',
        title:'Register',
        isAuthenticated:req.session.isAuthenticated,
    });
}
//post register page
exports.postRegister = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
        then(user => {
            if(user){
                return res.redirect('/register')
            }

            return bcrypt.hash(password,10);

        })
        .then(hashPassword => {
            const newUser = new User({
                name:name,
                email:email,
                password:password,
                cart:{item : []}
            });
            return newUser.save();
        })
        .then(() => {
            res.redirect('/login');
        }).catch(err => console.log(err))

    res.redirect('/login')
}
//get reset password page
exports.getResetPassword = (req,res,next) => {
    res.render('account/reset',{
        path:'/reset-password',
        title:'Reset Password',

    });
}
//post reset password page
exports.getResetPassword = (req,res,next) => {
    res.redirect('/login')
}

exports.getLogout = (req,res,next) => {

    // req.session.destroy(err => {
    //     console.log(err);
    //     res.redirect('/login')
    // });
}
