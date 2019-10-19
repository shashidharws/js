async = require('async');


async.waterfall([
  myFirstFunction,
  mySecondFunction,
  myLastFunction,
], fin);

function fin(err, result) {
  // result now equals 'Task1 and Task2 completed'
  console.log(result);
}

function myFirstFunction(callback) {
  callback(null, 'Task 1', 'Task 2');
}
function mySecondFunction(arg1, arg2, callback) {
  // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
  let arg3 = arg1 + ' and ' + arg2;
  callback(null, arg3);
}
function myLastFunction(arg1, callback) {
  // arg1 now equals 'Task1 and Task2'
  arg1 += ' completed';
  callback(null, arg1);
}
