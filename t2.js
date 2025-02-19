const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    let arr = req.url.split('?');
    let value = arr[1];
    if (arr[0] == '/greet' && value) {
        const queryParams = value.split('&');
        const obj = {};
        queryParams.forEach(param => {
            const [key, value] = param.split('=');
            obj[key] = value;
        });
        if (obj.name) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`hello ${obj.name}`);
        }
    }
    res.end();
});
server.listen(4000,() => {
        console.log('connected');
    }
);