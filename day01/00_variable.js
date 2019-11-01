// 한 줄 주석

/* 여러 줄에 
걸친 주석 */

// let : 값을 재할당 할 변수 선언 키워드 : 블록 유효 범위(block scope)를 갖는다 
let x = 1
// print(x) 
// console.log(x) // 1
// 재할당 : Uncaught SyntaxError: Identifier 'x' has already been declared
// 모든 변수는 재선언 불가 / 재할당만 가능 
// let x = 3 
x = 3
// console.log(x) // 3

// 중괄호 유효 범위 
if (x === 3) {
  let message = '안녕하세요'
  console.log(message)
  console.log(x) // 유효 범위 안에서 찾고 없으면 밖으로 
}

// console.log(message) // 00_variable.html:33 Uncaught ReferenceError: message is not defined

// console.log(y) // undefined : Python 의 None 에 해당

// const
// 값이 변하지 않는 (재할당을 할 수 없는) 상수를 선언하는 키워드이다. 
// let 과 동일하게 블록 유효 범위 (block scope) 를 가진다. 
// "모든" 선언에서 "가능한" 상수를 사용해야 한다.

const MY_FAV = 20 // Uncaught SyntaxError: Missing initializer in const declaration
// const 로 선언할 때 값을 할당해주어야 함

// MY_FAV = 30 // 상수니까 재할당 불가능 

if (MY_FAV === 20) {
  const MY_FAV = 30
  console.log(MY_FAV) // 30 
}

console.log(MY_FAV) // 20

// 식별자
// 변수명은 식별자라고 불린다. 
// 1. 반드시 문자, 달러($), 밑줄(_) 로 시작해야 한다.
// 2. 대소문자 구분, Class 이름 제외하고 대문자 시작 않는 걸 권장
// 3. 예약어 사용 불가 (const, let, class, return, case..)

// 카멜 케이스 (camelCase) - 객체 함수, 변수

// 이벤트 핸들러 - 'on' 으로 시작
const onClick = () => {}


// boolean 값 - 'is' 로 시작
let isAvailable = false


// 함수이름
function getUsername () {} 


// 파스칼 케이스 (PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}


// 대문자 스네이크 케이스 - 상수 
const API_KEY = 'asfsdaf'