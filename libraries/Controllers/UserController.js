//const { Controller } = require('./Controller');
const { User } = require('../Models/User');

class UserController{

    model;

    constructor() {
        this.model = new User();
    }

    register(req, res) {
        res.json({
            message: "Ajoute un nouvel utilisateur",
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            methode: req.method
        })
        this.model.insert(req);
    }

    index(req, res) {
        this.model.findAll()
        .then(result => {res.json({
            message: "Vous souhaitez accéder à la liste de tous les utilisateurs",
            users: result,
            methode: req.method
        })})
        .catch(err => {res.json({
            message: err
        })})
    }

    show(req, res) {
        this.model.find(req.params.id)
        .then(result => {res.json({
            message: "Vous souhaitez accéder de l'utilisateur n°" + req.params.id,
            user: result,
            methode: req.method
        })})
        .catch(err => {res.json({
            message: err
        })})
    }

    update(req, res) {
        this.model.find(req.params.id)
        .then(result => {
            this.model.update(req)
        })
        .catch(err => {res.json({
            message: err
        })})
    }
}

module.exports = {
    UserController,
}