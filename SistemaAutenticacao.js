export class SistemaAutenticacao {

    static login(autenticavel, senha) {

        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false
    }

    static ehAutenticavel(autenticavel) {
     
        return 'autenticar' in autenticavel && // verificar se 'autenticar' exite no (in) objeto 'autenticavel' &&    
        autenticavel.autenticar instanceof Function; //verifica se autenticar é um instancia do tipo 'função';  
    } 
}