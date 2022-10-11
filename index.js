import { Cliente } from "./Cliente.js"; // referenciar o tipo de arquivo (.js)
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/contaPoupanca.js";
import { ContaSalario } from "./Conta/contaSalario.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


// SEÇÃO CLIENTES \\
const cliente1 = new Cliente('Ricardo', 11122233301, 456);
const cliente2 = new Cliente('Alice', 11122233302, 789);


// SEÇÃO FUNCIONÁRIOS \\
const diretor = new Funcionario('Rodrigo', 12345678900, 10000);
diretor.cadastrarSenha(123456);

const gerente = new Funcionario('Ricardo', 12345678901, 5000);
gerente.cadastrarSenha(123789)


// SEÇÃO LOG IN \\
const logOnGerente = SistemaAutenticacao.login(gerente, '123789');
const logOnDiretor = SistemaAutenticacao.login(diretor, '123456');
const LogOnCliente1 = SistemaAutenticacao.login(cliente1, '456')
const LogOnCliente2 = SistemaAutenticacao.login(cliente2, '789')


// SEÇÃO CONTAS CORRENTES \\
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);


// SEÇÃO CONTAS POUPANÇA \\
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);


//SEÇÃO CONTAS SALARIO \\ 
const contaSalarioAlice = new ContaSalario(cliente2);


// SEÇÃO DE EXECUÇÃO DO SISTEMA \\

console.log(logOnDiretor);
console.log(logOnGerente);
console.log(LogOnCliente1);
console.log(LogOnCliente2);

contaCorrenteRicardo.depositar(500);
contaCorrenteAlice.depositar(300);
contaPoupancaRicardo.depositar(50);
contaCorrenteRicardo.sacar(200);
contaCorrenteAlice.sacar(100);
contaPoupancaRicardo.sacar(30);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log(contaPoupancaRicardo);




