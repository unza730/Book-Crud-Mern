const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB = require('./DB/DB');
var cors = require("cors");
const bookRouter = require('./routes/BookRoute');
DB();

app.use(express.json());
app.use(cors());
app.use("/books", bookRouter);
app.get('/', (req, res) => {
    res.send('hellow world');
})

app.listen(8000, () => {
    console.log("connected Succesully")
});