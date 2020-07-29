const {Router} = require('express');
const routes = new Router();
const SessionController = require('./controllers/SessionController')
const HouseController = require('./controllers/HouseController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

routes.get('/', (req, res) => {
    return res.json({ ok: true});
});

const upload = multer(uploadConfig);

routes.post('/session', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

module.exports = routes;