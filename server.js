const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello World!!!"); // Creates a res or responce from the server to the client
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});