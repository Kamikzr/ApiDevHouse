const express = require('express');
const routes = require('./routes');
const mysql = require('mysql');
const dotenv = require('dotenv');

class App{
    constructor(){
        this.server = express();

        const db = mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE
        });

        db.connect( (err) => {
            if(err) {
                console.log(err.sqlMessage)
            } else {
                console.log("MYSQL Connected...")
            }
        });
 
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes)
    }
}

module.exports = new App().server;