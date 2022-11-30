const { Conf } = require('./libraries/Conf');
const { UserController } = require('./libraries/Controllers/UserController');
const conf = new Conf();
const userController = new UserController();

const router = conf.router;
const urlencodedparser = conf.bodyParser.urlencoded({ extended: false });

/**
 * User register
 */
router.route('/register')
.post(urlencodedparser, function (req, res) {
    userController.register(req, res);
})

/**
 * Get, update and delete user info
 */
router.route('/user/:id')
.get(function (req, res) {
    userController.show(req, res);
})
.put(urlencodedparser, function (req, res) {
    // res.json({
    //     message: "Vous souhaitez modifier les infos de l'utilisateur n°" + req.params.id,
    //     methode: req.method
    // })
    userController.update(req,res);
})
.delete(function (req, res) {
    res.json({
        message: "Vous souhaitez supprimer l'utilisateur n°" + req.params.id,
        methode: req.method
    })
})

/**
 * Get all users info
 */
router.route('/users')
.get(function (req, res) {
    userController.index(req, res);
})

/**
 * User login
 */
router.route('/login')
.post(function (req, res) {
    res.json({
        message: "vous souhaitez vous connecter",
        methode: req.method
    })
})

/**
 * Show user info
 */
router.route('/me')
.get(function (req, res) {
    res.json({
        message: "vous souhaitez accéder à vos infos",
        methode: req.method
    })
})




/**
 * Starting server
 */
conf.app.use(router);

conf.app.listen(conf.port, () => {
    console.log(`Example app listening on port ${conf.port}`);
});


