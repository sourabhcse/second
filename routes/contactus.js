const express=require('express');
const router = express.Router();
const path=require('path')
const rootDir=require('../util/path');

/*router.get('/',(req,res,next)=>{
    console.log("in the another middleware");
    res.send('<form   action ="#" method="POST"><input id="username" type="text" name="title"><button type="submit">Send</button>');
    
});*/
const productsController=require('../controllers/products');

router.get('/contactus',productsController.contactus);

router.post('/contactus',productsController.postcontact);


module.exports=router;