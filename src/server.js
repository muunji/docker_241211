const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = 3060;
const filePath = path.join(__dirname,"../public/index.html");

const server = http.createServer((req,res)=>{
  if(req.method==="GET"){
    if(req.url==='/'){
      const html = fs.readFileSync(filePath,'utf-8',()=>{});

      res.writeHead(200,{"content-type":"text/html"})
      res.write(html);
      res.end();
    }
  }
})
.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})