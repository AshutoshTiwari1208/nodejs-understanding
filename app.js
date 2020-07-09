const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.write("<html>");
		res.write("<head><title>IS</title></head>");
		res.write("<body>");
		res.write(
			"<form method='POST' action='/home'><input name='messsage'/><button type='submit'>Send</button></form>"
		);
		res.write("</body></html");
		return res.end();
	}
	if (req.url == "/home") {
		res.statusCode = 302; //redirect !
		res.setHeader("location", "/"); //location to redirect
		fs.writeFileSync("names.txt", "bhushan ji");
		return res.end();
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Inclined Scorpio</title></head>");
	res.write("<body> Let's Start Node.js</body>");
	res.write("</html>");

	res.end();
});

server.listen(3000);
