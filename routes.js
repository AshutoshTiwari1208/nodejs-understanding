const fs = require("fs");

const Routes = (req, res) => {
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
		let body = [];
		req.on("data", chunk => {
			console.log(" Chunk--> ", chunk);
			body.push(chunk);
		});
		req.on("end", () => {
			// when req has received all chunks
			let parsedData = Buffer.concat(body).toString();
			fs.appendFile("names.txt", `${parsedData.split("=")[1]} \n`, err => {
				if (err) res.send("Some error Occured");
				//Now return from here as "return already will run by when control reaches here"
			});
		});
		res.statusCode = 302; //redirect !
		res.setHeader("location", "/"); //location to redirect
		return res.end();
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Inclined Scorpio</title></head>");
	res.write("<body> Let's Start Node.js</body>");
	res.write("</html>");

	res.end();
};

module.exports = Routes;

module.exports = {
	routes: Routes,
	message: "Hard Coded Text"
};

module.exports.routes = Routes;
module.exports.message = "Hard Coded Text";

exports.routes = Routes;
exports.message = "Hard Coded Text";
