const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('D:/22b81a05du/fsdlab/lab2/lab6/index.html','UTF-8',(err,val)=>{
            if(err){
                console.error('error',err);
            }
            else{
                res.write(val);
                res.end();
            }
        });
    }
})
server.listen(4000,()=>{
    console.log("Server connected")
})