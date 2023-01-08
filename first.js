//const http = require("http");
//const routes=require('./routes.js');

const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');

//console.log(routes.text);

const app=express();
//hello

const adminRoutes=require('./routes/admin.js');

const shopRoutes =require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended:false}));

// "/admin is ignored in the path"
app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



//const server = http.createServer(app);*/

/*const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const { urlencoded } = require('express');

const app=express();

app.use(express,urlencoded({extended:false}));
app.get("/",(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data ='no chat exist';
        }
        res.send(`${data}<form action="/" method="POST" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name ="message" id="message"><input type="hidden" name="username" id="username">
        <br/>
        <button type='submit'>send</button>
        </form>`
        );
    })
    
});

app.post("/",(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err ? console.log(err) : res.redirect("/")
    );

});

app.get('/login',(req,res)=>{
    res.send(`<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value">
    <input type="text" name ="username" id="username">
        <br/>
        <button type='submit'>login/button>
        </form>`)
});*/



app.listen(3000);