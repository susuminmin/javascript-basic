// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors) {
  console.log(color)
}


// forEach 하나씩 순회 : 루프만 돌아주는 메소드 
colors.forEach(function (color) {
  console.log(color)
})

colors.forEach(color => {
  console.log(color)
})

colors.forEach(color => console.log(color)) // 한 줄 


// map : 배열 내 모든 요소에 대해, 주어진 함수를 호출 결과 모아 새로운 결과 rtn
// 일정한 형식의 새로운 배열 만들 때 사용 

const numbers = [1, 2, 3, 4,]
const doubleNumbers = numbers.map(number => {
  return number * 2
}) // 연산 후 새로운 배열 반환

// const doubleNumbers = numbers.map(number => number * 2)


// 숫자가 담긴 배열 받아 각 수의 제곱근 들어 있는 새로운 배열 만들기 
const numbers2 = [4, 9, 16, 25,]
const numbers2root = numbers2.map(number => number ** (1 / 2))


// filter : 주어진 함수 테스트를 통과하는 모든 요소를 모아 새로운 배열 반환
const evenNumbers = numbers.filter(number => {
  return number % 2 === 0
})

const oddNumbers = numbers.filter(number => {
  return number % 2 !== 0
}) // 연산 값 true 인 값 모아서 array 반환  


const products = [
  { name: 'cucumber', type: 'vege' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vege' },
  { name: 'apple', type: 'fruit' },
]

const fruits = products.filter(product => {
  return product.type === 'fruit'
})

const vegetables = products.filter(product => {
  return product.type === 'vege'
})



// map 실습

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
]


const speeds = trips.map(trip => {
  return trip.distance / trip.time
}) // 각 루프마다 실행하는 함수 


const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter((age, index, self) => {
  console.log(age, index, self)
  return age >= 50
})


// find - 주어진 판별 함수 만족 첫번째 요소 값 반환 / 없다면 undefined 반환

const users = [
  { name: 'Unsung', age: 99 },
  { name: 'Hyereon', age: 29 },
  { name: 'Thor', age: 40 },
]

// const thor = users.find(user => {
//   return user.name === 'Thor'
// })

const thor = users.filter(user => {
  return user.name === 'Thor'
}) // filter 는 배열 안에 담아서 줌 


// some - 배열 안의 어떤 요소라도 ( === 가/true 하나라도! ) 주어진 판별 함수를 통과하는지 테스트하고
// 테스트 결과 따라 boolean 값 반환
// or 연산자와 비슷

const arr = [1, 2, 3, 4, 5,]

const result = arr.some(number => {
  return number % 2 === 0
})


// every - some 의 반대
// 전체 요소 중 하나라도 맞지 않으면 false
// 모든 요소가 짝수 포함하면 true

const result2 = arr.every(number => {
  return number % 2 === 0
})


// requests 배열에서 각 요청들 중 status 가 pending 인 요청이 있는지 확인
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => {
  return request.status === 'pending'
})


// reduce - 배열의 각 요소에 대해 주어진 `reducer` 함수 실행하고 하나의 값을 반환 
// reduce 는 배열 내 숫자 총합, 배열 내 평균 계산 등 배열의 값을 하나로 줄이는 동작 수행
// 첫번째 매개변수는 `누적값(이전 루프의 결과)`

const ssafyTest = [90, 99, 78, 80]

// 하나의 값 계속 modifying 
// const sum = ssafyTest.reduce((total, score) => {})

const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total // 다음 루프로 누적 값을 넘김
}, 0)


// ssafyTest 배열을 doubleSsafyTest 로 만드시오!
// => [180, 198, 156, 160]
const doubleSsafyTest = ssafyTest.reduce((doubleScores, score) => {
  console.log(doubleScores)
  doubleScores.push(2 * score) // yoso : 각각의 item 지칭
  return doubleScores
}, []) // [] 는 doubleScores 의 초기값... 여기에 push 



const rootSsafyTest = ssafyTest.reduce ((result, score) => {
  result.push(Math.sqrt(score))
  return result
}, [])
