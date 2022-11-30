class Database {

    mysql = require('mysql');
    instance;

    getDb() {
        if (!this.instance) {
            this.instance = this.mysql.createConnection({
                host: 'localhost',
                user: 'cyril',
                password: 'Cyril1994!!',
                database: 'apiProject'
            });
        }
        this.instance.connect(function(err) { if (err) throw err; console.log("connecté à la base de données mysql!"); })
        return this.instance;
    }
}

module.exports = {
    Database,
}