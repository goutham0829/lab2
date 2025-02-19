        const http=require('http');
        const Server=http.createServer((req,res)=>{
            if(req.url=='/'){
                res.write('main page');
                res.end('root');
            }
            else if(req.url=='/home'){
                res.write('welcome to home');
                res.end();
            }
            else if(req.url=='/about'){
                res.write('about us');
                res.end();
            }
            else if(req.url=='/contact'){
                res.write('contact us');
                res.end();
            }
        });
        Server.listen(4000,() => {
            console.log('Server is running on port 4000');
        });

