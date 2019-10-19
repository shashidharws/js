var async = require('async');

var no = 100;
var val = 50;
async.series([
    f1,
    f2, //use f2.bind(1, f2) only to use your defined functions in async.series, example f2
    f3 
], fin);

function f1 (callback) {
    console.log('one ' + no++);
    callback(null, 1, 100);
}

//function f2(val1, next) {         //enable this only when you use .bind
function f2(callback) {
    console.log('two ' + no++);
    callback(null, 2);
}

function f3(callback) {
    console.log('three ' + no++);
    return next();
    //callback(null, 3);
}

function fin(err, results) {
    if(err === null)
        console.log(results);
    else
        console.log(err);
  // results is now equal to [1, 2, 3]
}
