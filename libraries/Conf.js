class Conf {
    express;
    app;
    port;
    router;
    bodyParser;

    constructor() {
        this.express = require('express');
        this.app = this.express();
        this.port = 3000;
        this.router = this.express.Router();
        this.bodyParser = require('body-parser');
    }
}

module.exports = {
    Conf,
}
