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

        //verificando se esse email já existe
        let user = await User.findOne({ email }); 

        if(!user){
            user = await User.create({ email }); //se não encontrar a tabela, cria uma
        }

        return res.json({ user }); //retornando o item criado na tabela
    }
}

module.exports = new sessionController();