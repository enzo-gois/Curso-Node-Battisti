const chalk = require('chalk');

const nota = 8;

if (nota >= 7) {
  console.log(chalk.green.bold('Parabéns! Você está aprovado!'));
} else {
  console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação!'));
}
