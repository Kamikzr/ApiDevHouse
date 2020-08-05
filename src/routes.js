const {Router} = require('express');
const routes = new Router();
const SessionController = require('./controllers/SessionController')
const HouseController = require('./controllers/HouseController');

//importando as configurações do multer
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig); //iniciando o multer

routes.get('/', (req, res) => {
    return res.json({ ok: true});
});

routes.post('/session', SessionController.store);

//importando uma única imagem (single), caso for mais de uma -> (array)
routes.post('/houses', upload.single('thumbnail'), HouseController.store);

module.exports = routes;