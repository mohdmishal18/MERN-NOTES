const http = require("http")

const server = http.createServer((req, res) =>
{
    console.log("req is made")
    res.setHeader("Content-Type", "text/plain"); // Desrcibes what the response will be
	res.write("Hello World");
	res.end();
})

server.listen(3000 , 'localhost' , () => console.log("server running"))