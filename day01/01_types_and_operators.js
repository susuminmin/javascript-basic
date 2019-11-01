// 01 Types and Operators (타입과 연산자)

// Primitive Type 

// Numbers
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.998e8 // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number 

console.log(a, b, c, d, e, f, g)
console.log(5 / '안녕하세요') // NaN 


// Strings
const sentence1 = 'Ask and go to the blue'
const sentence2 = 'Ask and go to the blue'
const sentence3 = 'Ask and go to the blue'

console.log(sentence1)
console.log(sentence2)
console.log(sentence3)

const word = '안녕\n하세욧!'
console.log(word)

// 백틱을 쓰면 줄바꿈 됨 / escape sequence 사용 안 됨 
// Template Literal 사용 할 수 있음 

const word2 = `안녕
하세융?
`
console.log(word2)


// Template Literal
const age = 10
const message = `홍길동의 나이는 ${age}`
console.log(message)

console.log('Happy' + 'Hacking')

// Boolean : 소문자로 표현 

true
false


// Empty Value
// 값이 존재하지 않음을 표현하는 값 
undefined
null

let firstName // 선언하고 할당하지 않음 => undefined
console.log(firstName)

let lastName = null // 의도적으로 값이 없음 표시할 때 


typeof null // object
typeof undefined // undefined


// Operators 연산자
let x = 0
x += 10   // 10
x -= 3    // 7
x *= 3    // 21
x ++      // 22
x --      // 21

// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순

'A' < 'B'   // true
'A' < 'a'   // false
'가' < '나'  // true

// 동등 연산자 (==)
// 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단
// (JS 엔진이 자동으로 형변환) ==> 동등 연산자 사용 지양
const a1 = 1
const b1 = '1'

console.log(a1 == b1)   // true

1 == '1'            // false
1 == Number('1')    // true

// 논리 연산자
// and, or, not

true && true        // true
true && false       // false
true || true        // true
true || false       // true, 하나라도 참이라면 true

// 값을 반대로 뒤집는다. 
!true // false
!false // true


// 삼항 연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값 반환
// 그렇지 않다면 : 뒤의 값 반환 

let flag = true
const result = flag ? '참이니' : '거짓이니' 
console.log(result) // 참이니 