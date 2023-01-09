const express=require('express');
const router=express.Router();
//const path=require('path');
/*const fs=require('fs');

//same routing add-roduct but differt method GET
router.get('/login',(req,res,next)=>{
    console.log("in the middleware");
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  action ="/" method="POST"><input id="username" type="text" name="title" placeholder="login"><button type="submit">Login</button>');

});
//same routing add-roduct but differt method POST
router.get("/",(req,res)=>{
    fs.readFile('username.text',(err,data)=>{
        if(err){
            console.log(err);
            data ='no chat exist';
        }
        res.send(` ${ data } <form action="/" method="POST" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name ="message" id="message" placeholder="enter the message"><input type="hidden" name="username" id="username">
        <br/>
        <button type='submit'>send</button>
        </form>`
        );
    })
    
});
router.post("/",(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('username.text' , `${req.body.username} : ${req.body.message}`, {flag: 'a'},(err)=>
    err ? console.log(err) : res.redirect("/")
    );

});*/
const productsController=require('../controllers/products');

//const rootDir=require('../util/path');
router.get('/add-product',productsController.getAddProduct);

router.post('/product',productsController.postAddProduct);

module.exports=router;