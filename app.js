const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req.url, req.method, req.headers); //Check data we got
	res.setHeader("Content-Type", "text/html"); //set Headers

	res.write("<html>"); //Writing Data to Response Obj
	res.write("<head><title>Inclined Scorpio</title></head>");
	res.write("<body> Let's Start Node.js</body>");
	res.write("</html>");

	res.end(); //Asking Node.js to Send The Response
});

server.listen(3000);
