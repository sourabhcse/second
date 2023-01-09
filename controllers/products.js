const path=require('path');
const rootDir=require('../util/path');

exports.getAddProduct= (req,res,next)=>{
    //console.log("in the middleware");
    res.sendFile(path.join(rootDir,'views','add-product.html'));

}


exports.postAddProduct= (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProduct= (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}

exports.contactus= (req,res,next)=>{
    //console.log("in the middleware");
    res.sendFile(path.join(rootDir,'views','contactus.html'));

}

exports.postcontact= (req,res,next)=>{
    //console.log("in the middleware");
    res.sendFile(path.join(rootDir,'views','success.html'));

}
    