import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Luiz", 12356875468);
const cliente2 = new Cliente("Rachel", 12357918763);
const cliente3 = new Cliente("Mayara",12357678587);

//console.log(cliente2.cpf);


const contaCorrenteLuiz = new ContaCorrente(cliente1, 1001);
contaCorrenteLuiz.depositar(500);

const contaCorrenteRachel = new ContaCorrente(cliente2, 1002);

const contaCorrenteMayara = new ContaCorrente(cliente3, 1003);

let valor = 200;
//contaCorrenteRachel.cliente = cliente2;

contaCorrenteLuiz.transferir(valor, contaCorrenteRachel);

//console.log(valorSacado);

console.log(ContaCorrente.numeroDeContas);






