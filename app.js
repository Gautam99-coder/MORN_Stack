const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to PizzaPalooza! 🍕 Try /pepperoni or /cheese!");
    } else if (req.url === "/pepperoni") {
        res.end("Here’s your spicy pepperoni pizza! 🌶️🍕");
    } else if (req.url === "/cheese") {
        res.end("Cheesy goodness coming right up! 🧀🍕");
    } else {
        res.writeHead(404);
        res.end("Oops! No such pizza on the menu! 😅");
    }
});

server.listen(3000, () => {
    console.log("Pizza shop is open at http://localhost:3000!");
});