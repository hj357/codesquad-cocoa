var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);

let star;
for (let i = 1; i <= a; i++) {
  star += "*";
  console.log(star);
}
