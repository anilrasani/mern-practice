const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Employee Backend");
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});
