const { Database } = require('../Database');

class Model {

    db;
    table;

    constructor() {
        this.db = new Database();
        this.db = this.db.getDb();
    }

    findAll() {
        return new Promise((resolve, rejects) => {
            let sql = "SELECT * FROM " + this.table;
            this.db.query(sql, function(err, result) {
                if (err) {
                    rejects(err);
                }
                resolve(result);
            });
        })
        
    }

    find(id) {
        return new Promise((resolve, rejects) => {
            let sql = "SELECT * FROM " + this.table;
            sql += " WHERE id = " + id;
            this.db.query(sql, function(err, result) {
                if (err) {
                    rejects(err);
                }
                resolve(result);
            });
        })
    }
}

module.exports = {
    Model,
}