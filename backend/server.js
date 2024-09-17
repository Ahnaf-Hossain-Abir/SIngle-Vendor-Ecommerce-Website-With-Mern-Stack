// Import express
const express = require("express");

// Initialize express app
const app = express();

// Define a port
const port = process.env.PORT || 4000;

// Set up a basic route
app.get("/abc", (request, response) => {
  response.send({
    name: "AAAA"
  });
});

// Listen to the server on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
