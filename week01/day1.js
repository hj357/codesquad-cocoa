let logArr = [];

function getArea(shape, num1, num2, num3) {
  switch (shape) {
    case "circle":
      if (num2) {
        let sum = 0;
        for (let i = num1; i <= num2; i++) {
          let d = i * i * Math.PI;
          sum = sum + d;
        }
        console.log("원의 넓이의 모든 합 : ", sum);
        saveExecutionSequence("circle", sum);
      } else {
        let a = num1 * Math.PI;
        console.log("원의 넓이 : ", a);
        saveExecutionSequence("circle", a);
      }
      break;
    case "rect":
      let b = num1 * num2;
      console.log("사각형의 넓이 : ", b);
      saveExecutionSequence("rect", b);
      break;
    case "trapezoid":
      let c = ((num1 * num2) / 2) * num3; //(윗변*아랫변/2)*높이
      console.log("사다리꼴의 넓이 : ", c);
      saveExecutionSequence("trapezoid", c);
      break;
    default:
      console.log("도형을 정확하게 입력해주세요");
  }
}

function saveExecutionSequence(shape, result) {
  logArr.push(`${shape}, ${result}`);
}

function printExecutionSequence() {
  const printLog = logArr.join(" // ");
  console.log("수행순서와 값", printLog);
}

getArea("circle", 10); //31.40
getArea("rect", 10, 15); //150
getArea("trapezoid", 10, 15, 12); //900
getArea("circle", 1, 3); // 94.2
getArea("circl", 10); //정확하게 입력해주세요
printExecutionSequence();
