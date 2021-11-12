// 1. factorial 함수

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; //result = result * i;
  }
  console.log(result);
}

factorial(3);

// 2. 배열 거르기

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples);
// > ["honux", "head", "zello", "lucas"]

function filterId(peoples) {
  for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi)) {
      //정규식이라는 표현법이래
      peoples.splice(i, 1); //splice i번째 인덱스에서 숫자만큼 지우거나 대체
    }
  }
  for (let j = 0; j < peoples.length; j++) {
    if (peoples[j].match(/[0-9]/)) {
      peoples[j] = peoples[j].replace(/[0-9]/, "");
    }
  }
  console.log(peoples);
}

filterIdForEach(peoples); // forEach문 사용
function filterIdForEach(peoples) {
  peoples.forEach(function (people) {
    if (people.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi)) {
      people.splice(i, 1);
    }
  });
  for (let j = 0; j < peoples.length; j++) {
    peoples[j] = peoples[j].replace(/[0-9]/, "");
  }

  console.log(peoples);
}

// 3. 평균 구하기
const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

function calculategrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    let averageScore = [];
    averageScore.push(grades[i][0] + grades[i][1] + grades[i][2]);
    console.log(`${i + 1} 번째 학생의 평균점수는 ${averageScore}`);
    let bestScore = [];
    bestScore.push(Math.max(grades[i][0], grades[i][1], grades[i][2]));
    console.log(`${i + 1} 번째 학생의 최고점수는 ${bestScore}\n`);
  }
}
calculategrades(grades);
