//引用模块
// var unique = require('uniq');
// var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// console.log(unique(data));

//引用foo.js

var foo = require('./foo.js');
console.log(foo.base(20));