const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const { url } = require("./config/database");

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    database() {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;