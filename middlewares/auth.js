module.exports = (req,res,next) => {
    if(!req.body.isAuthentication){
        req.session.redirectTo = req.url;
        res.redirect('/login')
    }
    next();
}