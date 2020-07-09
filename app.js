const http = require("http");

const routes = require("./routes");

console.log("Message ==> ", routes.message);

const server = http.createServer(routes.routes); //callback is sent

server.listen(3000);
