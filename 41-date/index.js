var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date(1999, 6, 7);

// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment('2099-06-07 00:00');
console.log(now.fromNow());