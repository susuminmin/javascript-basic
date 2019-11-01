console.log(add)

// 함수 선언식 
function add(num1, num2) {
  return num1 + num2
}

add(1, 2) // 3


// 함수 표현식 
const sub = function(num1, num2) {
  return num1 - num2
}

console.log(sub)


// Arrow Function
// ES6+
// const addOne = function(num) {
//   return num + 1
// }

// const addTwo = (num) => {
//   return num + 2 
// }

let addOne = function(num) {
  return num + 1
}

addOne = (num) => {
  return num + 2 
}

addOne = (num) => num + 1

// 중괄호 제거는 바로 봔한하겠다는 뜻
addOne = num => num + 1


// name 이라는 인자를 받아서 hello ${ }을 반환하는 함수를 
// 선언식, 표현식, Arrow Function 으로 만들어 보세요 

let greeting = function(name) {
  return `hello ${name}`
}

greeting = (name) => {
  return `hello ${name}`
}

console.log(greeting)

// 표현식 
const greeting2 = name => `hello ${name}`


// ojbect 를 반환하는 arrow function
const makeObject1 = (value) => {
  return {"key": value}
}

// const makeObject2 = value => {"key": value} // 작동 X 
const makeObject2 = value => ({"key": value}) // 소괄호 값 넘기고 있음 표시 

const noArgs = () => 'no args' // 인자 없으면 빈 소괄호 넣어주어야 함 



// 
function concat(str1, str2) {
    return `${str1} - ${str2}`
}

function check_long_str(string) {
    if (string.length > 10 ) {
      return true
    } 
    else {
      return false        
    }
}

// if (check_long_str(concat('Happy', 'Hacking'))) {
//     console.log('LONG STRING')
// } else {
//     console.log('SHORT SRING')
// }