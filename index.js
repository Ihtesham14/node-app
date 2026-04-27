// server.mjs
const express = require('express')
const app = express()
app.get("/", (req, res) => {
  res.send("Hello World!!. Docker image created and pushed to Docker Hub")
})

// starts a simple http server locally on port 3000
app.listen(3000, () => {
  console.log('Listening on port:3000');
});

