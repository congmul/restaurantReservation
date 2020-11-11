const express = require("express");
let path = require("path");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservationList = [];
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

app.post('/api/reservation/:newReservation', (req, res) => {
    console.log(JSON.parse(req.params.newReservation));
    reservationList.push(req.params.newReservation);
    return res.json(reservationList);
});

app.post('/api/waitlist/:waitlist', (req, res) => {
    console.log(JSON.parse(req.params.waitlist));
    waitList.push(req.params.waitlist);
    return res.json(waitList);
});

app.post('/api/clear', (req, res) => {
    reservationList = [];
    return res.json(reservationList);
});



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})

function reservation(name, phoneNumber, email, id){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.id = id;
}