const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [2, 5, 3, 2, 1, 8];

const diff = _.difference(a, b);

console.log(diff);
