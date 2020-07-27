const {Router} = require('express');
const routes = Router();
const SessionController = require('../controllers/SessionController')

routes.get('/', (req, res) => {
    return res.json({ ok: true});
});

routes.post('/session', SessionController.store);

module.exports = routes;