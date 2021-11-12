var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();
var a = input[0];

console.log(a.charCodeAt());
