// Create web server
// 1. Create web server
// 2. Get request
// 3. Read file
// 4. Convert to JSON
// 5. Send response to client
// 6. Send response
// 7. Listen to port
// 8. Log
// 9. Error handling
// 10. Create a new comment
// 11. Save
// 12. Send response to client
// 13. Listen to port
// 14. Log
// 15. Error handling

// 1. Create web server
const express = require("express");
const app = express();

// 2. Get request
app.get("/comments", (req, res) => {
  // 3. Read file
  fs.readFile("./data/comments.json", "utf8", (err, data) => {
    // 9. Error handling
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred getting comments");
    }

    // 4. Convert to JSON
    const comments = JSON.parse(data);

    // 5. Send response to client
    res.send(comments);
  });
});

// 10. Create a new comment
app.post("/comments", (req, res) => {
  // 11. Save
  fs.readFile("./data/comments.json", "utf8", (err, data) => {
    // 15. Error handling
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred getting comments");
    }

    // 4. Convert to JSON
    const comments = JSON.parse(data);

    // 12. Send response to client
    res.send(comments);

    // 13. Listen to port
    app.listen(3000, () => console.log("Listening on port 3000..."));
  });
});

// 14. Log
console.log("Getting comments...");

// 6. Send response
res.send(comments);

// 7. Listen to port
app.listen(3000, () => console.log("Listening on port 3000..."));

// 8. Log
console.log("Getting comments...");