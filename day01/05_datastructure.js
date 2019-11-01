const numbers = [1, 2, 3, 4,]

numbers[0]
numbers[-1]
numbers.length // 4 

// 배열 뒤집기
numbers.reverse() // [1, 2, 3, 4, ]
numbers

// 배열 가장 마지막에 아이템 추가하기 
numbers.push(5)
numbers.push('abc') // 5 반환됨 => 추가 후 배열의 길이 값을 반환 

// numbers.add('abc')

// 가장 마지막 요소 삭제 
numbers.pop() // 꺼낸 아이템 반환
numbers       // [1, 2, 3, 4]

// 가장 앞에 요소 추가 
numbers.unshift("a") // 5, new length

// 첫번째 요소 제거 후 반환
numbers.shift() // "a", 제거한 아이템
numbers // [1, 2, 3, 4]

// includes - 들어 있는 요소 확인 
numbers.includes(0)
numbers.includes(1)

// indexOf - 특정 아이템 index 찾아서 반환
numbers.push("a")
numbers.push("a")

numbers.indexOf('a') // 4, 일치하는 가장 첫번재 아이템의 인덱스 반환, 없으면 -1 반환
numbers.indexOf('b') // -1 


// join - 배열의 아아템을 seperator 로 이어서 문자열로 반환 
numbers.join('-') // '-' 를 중간마다 넣기, 원본은 그대로 있음
numbers.join()    // "1,2,3,4,a,a" 
numbers.join('')  // "1234aa"
numbers.join()    // "1-2-3-4-a-a"




// Object 

const name = 'Sumin'

// c.f. `.` 으로 접근 X 경우만 me["phone_number"] 로 접근 
const me = {
  name: name, // 위에서 선언한 name 넣어줄 수 있음 
  'phone number': '010-1234-5678', // 변수 이름, 키 이름 같다면...? 'name: name, => name, `으로 생략 가능 Object Literal
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}


// JSON

const jsonData = JSON.stringify(me) // 직렬화 : JS Object 를 Str 값으로 변환

const parsedData = JSON.parse(jsonData)   // 역직렬화 : Str 을 JS Object 로
