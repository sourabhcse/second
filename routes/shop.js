const express=require('express');
const router = express.Router();
const path=require('path')

/*router.get('/',(req,res,next)=>{
    console.log("in the another middleware");
    res.send('<form   action ="#" method="POST"><input id="username" type="text" name="title"><button type="submit">Send</button>');
    
});*/

router.get('/',(req,res,next)=>{  
    res.sendFile(path.join(__dirname, '../','views','shop.html'));
});

module.exports=router;