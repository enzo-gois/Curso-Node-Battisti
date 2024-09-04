const fs = require('fs');

if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe!');
}

if (fs.existsSync('./minhapasta')) {
  console.log('Existe!');
}
