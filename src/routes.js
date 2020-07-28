const {Router} = require('express');
const routes = Router();
const SessionController = require('../controllers/SessionController')
const HouseController = require('../controllers/HouseController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

routes.get('/', (req, res) => {
    return res.json({ ok: true});
});

routes.post('/session', SessionController.store);

routes.post('/houses', HouseController.store);

module.exports = routes;