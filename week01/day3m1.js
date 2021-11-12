//2진수 = 10->2진수 10을 2로 계속 나눈다
//ex 10/2 =5...0 -> 5/2=2...1 -> 2/2=1...0

let logArr = [];

function solution(n, t, p) {
  let logArr = [];
  for (let i = 0; i < t * p; i++) {
    logArr.push(i.toString(n));
  } //2진수로 쉽게 바꾸기
  let logArr2 = logArr.join("").split("");
  console.log(logArr2);
  let turn = [];
  for (let j = 0; j < logArr2.length; j++) {
    if (j % p == 0) {
      turn.push(logArr2[j]);
    }
  }
  console.log("길동이 차례의 수 : " + turn);
}

solution(2, 4, 2);
solution(16, 3, 5);
