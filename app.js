const fs = require("fs");
const fetch = require("node-fetch");

fs.mkdir("result", (err) => {
  if (err) throw err;
  console.log("Folder Created");
});

fetch("http://result.typicode.com/posts")
  .then((res) => res.json())
  .then((data) =>
    fs.writeFile(
      "./jsonDataFolder/posts.json",
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) throw err;
        console.log("Results Received");
      }
    )
  )
  .catch((err) => console.log(err));
