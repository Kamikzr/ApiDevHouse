const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //caminho de onde será armazenada a foto

        //enviando a foto
        filename: (req, file, cb) => {
            //preparando o nome da imagem
            const ext = path.extname(file.originalname) //extensão da imagem
            const name = path.basename(file.originalname, ext);

            //chamando o callback
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    })
}