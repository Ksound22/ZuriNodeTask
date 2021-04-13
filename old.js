const http = require("http");
const fs = require("fs");
const fetch = require("node-fetch");

fs.mkdir("jsonDataFolder", (err) => {
  if (err) throw err;
  console.log("Folder Created");
});

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fs.writeFile("./jsonDataFolder/result.json", "This is the result", (err) => {
  if (err) throw err;
  console.log("Results Received");
});
