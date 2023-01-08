const express=require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("in the another middleware");
    res.send('<form   action ="#" method="POST"><input id="username" type="text" name="title"><button type="submit">Send</button>');
    
});



module.exports=router;