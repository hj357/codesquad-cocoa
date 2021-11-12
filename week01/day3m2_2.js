// 4. 배열 만들기
// 아래 데이터를 확인한다.
// https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27

// 숫자타입으로만 구성된 요소를 뽑아 배열만들기
// //실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]

const data = {
  debug: "on",
  window: {
    title: "Sample Konfabulator Widget",
    name: "main_window",
    width: 500,
    height: 500,
  },
  image: {
    src: "Images/Sun.png",
    name: "sun1",
    hOffset: 250,
    vOffset: 250,
    alignment: "center",
  },
  text: {
    data: "Click Here",
    size: 36,
    style: "bold",
    name: "text1",
    hOffset: 250,
    vOffset: 100,
    alignment: "center",
    onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
  },
};

function getKeyOfNumbervalue(data) {
  let result = [];
  for (i in data) {
    for (j in data[i]) {
      if (typeof data[i][j] == "number") {
        result.push(j);
      }
    }
  }
  console.log(result);
}
getKeyOfNumbervalue(data);

// 5. 배열 결과 출력
// 아래 링크를 눌러서 데이터를 확인한다.
// type이 sk인, name으로 구성된 배열만 출력해본다.
// https://gist.github.com/crongro/a9a118977f82780441db664d6785efe3

// ["Yong", "hary", "solvin", "hani", "chulsu"]

const data2 = [
  {
    id: 1,
    name: "Yong",
    phone: "010-0000-0000",
    type: "sk",
    childnode: [
      {
        id: 11,
        name: "echo",
        phone: "010-0000-1111",
        type: "kt",
        childnode: [
          {
            id: 115,
            name: "hary",
            phone: "211-1111-0000",
            type: "sk",
            childnode: [
              {
                id: 1159,
                name: "pobi",
                phone: "010-444-000",
                type: "kt",
                childnode: [
                  {
                    id: 11592,
                    name: "cherry",
                    phone: "111-222-0000",
                    type: "lg",
                    childnode: [],
                  },
                  {
                    id: 11595,
                    name: "solvin",
                    phone: "010-000-3333",
                    type: "sk",
                    childnode: [],
                  },
                ],
              },
            ],
          },
          {
            id: 116,
            name: "kim",
            phone: "444-111-0200",
            type: "kt",
            childnode: [
              {
                id: 1168,
                name: "hani",
                phone: "010-222-0000",
                type: "sk",
                childnode: [
                  {
                    id: 11689,
                    name: "ho",
                    phone: "010-000-0000",
                    type: "kt",
                    childnode: [
                      {
                        id: 116890,
                        name: "wonsuk",
                        phone: "010-000-0000",
                        type: "kt",
                        childnode: [],
                      },
                      {
                        id: 1168901,
                        name: "chulsu",
                        phone: "010-0000-0000",
                        type: "sk",
                        childnode: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 117,
            name: "hong",
            phone: "010-0000-0000",
            type: "lg",
            childnode: [],
          },
        ],
      },
    ],
  },
];

function getskNname(data2) {
  let result2 = [];

  for (const key in Object) {
  }
  if (data2[i][j] == "sk") {
    result2.push(object[key] == "name");
    console.log(result2);
  }
}
getskNname(data2);

//마르코님코드 // 참고하기
// const result = [];
// const digJsonTree = (data, target) => {
//   data.forEach((object) => {
//     for (const key in object) {
//       if (object[key] === target) {
//         result.push(object['name']);
//       }
//       //'위에서 object 안으로 파고들어 sk랑 같은지 확인하고 name을 푸시하는 작업'을 계속 재귀하려고 한다.
//       // object안에 또 object가 계속 중첩되어 있으므로, object 중첩 안으로 들어갈 때마다 object[key]가 sting이 아니고 object이다.
//       // 그래서 object[key]타입이 object이면, 위에서 했던 '작업'을 재귀하려고 한다.
//       // 재귀하면, 알아서 중첩의 끝까지 위 코드의 작업을 반복하여 값을 추가한다.
//       if (typeof object[key] === 'object') {
//         digJsonTree(object[key], target);
//       }
//     }
//   });
//   return result;
// };

// console.log(digJsonTree(data2, 'sk'));

// 6. reduce 만들기.
// Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.

//const myReduce = (arr, callback, initialValue) => {
//여기에 구현
// }

// const result = myReduce(arr, (next,prev) => {...}, []);

// 7. 추가미션
// JavaScript set & map 에 대해서 알아보고 정리해보자.
// 어떻게 사용하는것인가?
// object/array와는 어떤 점이 다르지?
// 언제 유용하게 쓰일 수 있을까?
// higher order functions은 어떻게 메서드 체이닝이 가능할까? 그 이유를 알아보자.

// 학습. 체크포인트
// 고차함수가 무엇인지 안다.
// for,while문을 사용하지 않고 배열을 iteration할 수 있다.
// reduce 메서드를 직접 만들 수 있다.
// JavaScript 객체를 iteration하고 객체의 속성에 접근해서 추가/변경할 수 있다.
