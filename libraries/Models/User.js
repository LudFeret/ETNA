const { Model } = require('./Model');

class User extends Model {

    table = 'Users';

    insert(req) {
        let sql = "INSERT INTO " + this.table + " (username, password, email, address) VALUES (?, ?, ?, ?)";
        let param = [req.body.username, req.body.password, req.body.email, req.body.address];
        this.db.query(sql, param, function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log("insertion is successfull");
        });
    }

    update(req) {
        let sql = "UPDATE " + this.table;
        // req.body.forEach(k, v => {
            
        // });
        sql += " SET ";
        sql += " WHERE id = " + req.params.id;
    }

}

module.exports = {
    User,
}