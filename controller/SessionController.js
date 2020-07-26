/* 
metodos de um SessionController: index, show, update, store, destroy

index: listagem de sessoes
show: listagem de uma unica sessao
update: alterar alguma sessao
store: criar uma sessao
destroy: excluir uma sessao
*/

class SessionController{

    store(re, res,){
        return res.json({ message: 'MinhaApi!' });
    }
}

module.exports = new SessionController();