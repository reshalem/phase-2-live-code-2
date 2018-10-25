const indexRouter = require('express').Router();
const UserController = require('../controllers/userController.js');

indexRouter.get('/', function(req, res) {
    res.send('Youtube List Home');
});

indexRouter.post('/register', UserController.register);
indexRouter.post('/login', UserController.login);

module.exports = indexRouter;