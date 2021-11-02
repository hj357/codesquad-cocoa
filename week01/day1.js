let shape;
let num1;
let num2;
let num3;

function getArea(shape, num1, num2, num3) {
  switch (shape) {
    case "circle":
      if ((num2 && num1, num2)) {
        let sum = 0;
        for (let i = num1; i < num2; i++) {
          let d = i * i * 3.14;
          sum = sum + d;
        }
        console.log(sum);
      } else {
        let a = num1 * 3.14;
        console.log(a.toFixed(2));
      }
      break;
    case "rect":
      let b = num1 * num2;
      console.log(b);
      break;
    case "trapezoid":
      let c = ((num1 * num2) / 2) * num3; //(윗변*아랫변/2)*높이
      console.log(c);
      break;
    default:
      console.log("정확하게 입력해주세요");
  }
}

getArea("circle", 10); //31.40
getArea("rect", 10, 15); //150
getArea("trapezoid", 10, 15, 12); //900
getArea("circle", 1, 5);
getArea("circl", 10); //정확하게 입력해주세요
