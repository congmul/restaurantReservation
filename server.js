const express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT | 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "reservationViews.html"));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})