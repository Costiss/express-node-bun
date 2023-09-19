import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("Hello World");
});

server.get("/stringfy", (req, res) => {
    res.send(JSON.stringify({ message: "Hello World" }, null, 4));
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});
