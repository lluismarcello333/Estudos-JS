export class Cliente{
    nome;
    _cpf;

    get cpf(){
       return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this,this._cpf = cpf;
    }
};
