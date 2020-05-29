var readlineSync = require('readline-sync');

var userName = readlineSync.question('Tôi có thể biết tên bạn chứ? ');
console.log('Chào ' + userName +'!');
