const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env'})

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_REG
})

const db2 = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_INFO
})

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    } else{
        console.log("MySQL Connected")
    }
})

// Определение маршрутов

app.use('/', require('./router/pages'));
app.use('/auth', require('./router/auth'));


app.listen(5000, () => {
    console.log("Server log on Port 5000")
})
