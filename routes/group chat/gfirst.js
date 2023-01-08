//const http = require("http");
//const routes=require('./routes.js');

const express = require('express');
const bodyParser=require('body-parser');

//console.log(routes.text);


const app=express();

const adminRoutes=require('./routes/admin.js');

const shopRoutes =require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended:false}));

// "/admin is ignored in the path"
app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
});





app.listen(3000);