const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', 'EnzoMysql3091', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  console.log('Conectamos ao MySQL');
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
