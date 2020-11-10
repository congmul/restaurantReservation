const express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT | 3000;

let reservationList = [
    {
        number: "1",
        name: "Jehyun",
        phoneNumber: "123123123",
        email: "email@email.com",
        id: "id"
    }
];
let waitList = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "reservationViews.html"));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
});

app.get('/api/tables', (req, res) => {
    return res.json(reservationList);
});

app.get('/api/waitlist', (req, res) => {
    return res.json(waitList);
});

app.post('/api/clear', (req, res) => {
    reservationList = [];
    return res.json(reservationList);
});



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})