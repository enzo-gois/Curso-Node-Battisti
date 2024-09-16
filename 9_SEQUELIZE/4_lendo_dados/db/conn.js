const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', 'EnzoMysql3091', {
  host: 'localhost',
  dialect: 'mysql',
});

// try {
//   sequelize.authenticate();
//   console.log('Conectamos com sucesso o Sequelize');
// } catch (error) {
//   console.log('Não foi possível conectar:' + error);
// }

module.exports = sequelize;
