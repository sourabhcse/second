const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;

if (url === '/') {
    fs.readFile('./message.text', { encoding: "utf-8" }, (err, message) => {
        /*if(err){
            console.log(err);
        }*/
        
        //console.log('data from file' , + message);
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>${message}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></body>');
        res.write('</html>');
        return res.end();
    });
    
}
else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        //console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.text', message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });

}else{
res.setHeader('Content-Type', 'text/html');
res.write('<html><body><h1>welcome to first node.js program</h1></body></html>');
res.end();}
};

//module.exports=requestHandler;
/*module.exports={
    handler:requestHandler,
    text:"Clean code"
};*/

module.exports.handler=requestHandler;
module.exports.text="clean code";