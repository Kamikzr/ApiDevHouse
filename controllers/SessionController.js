/* 
metodos de um SessionController: index, show, update, store, destroy

index: listagem de sessoes
show: listagem de uma unica sessao
update: alterar alguma sessao
store: criar uma sessao
destroy: excluir uma sessao
*/
const User = require('../models/User');

class sessionController{

    async store(req, res,){
        const { email } = req.body; //chamando um obj json "email" (desconstrução de: req.body.email) 

        let user = await User.create({ email }); //usando o db para criar a tabela ({email: email})

        return res.json({ user }); //retornando o item criado na tabela
    }
}

module.exports = new sessionController();