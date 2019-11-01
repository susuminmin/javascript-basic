// const username = prompt('안녕하세요? 당신은 누구신가요?')

// let message = ''

// if (username === 'ssafy') {
//   message = '<h1>SSAFY에 오신 걸 환경합니다!!!</h1>'
// } else if (username == 'admin') {
//   message = `<h1>주인님 안녕하세요!</h1>`
// } else {
//   message = `<h1>Welcome ${username}</h1>`
// }

// document.write(message)

// switch 문
const username = prompt('WHO R U?')

switch(username) {
  case 'ssafy': {
    message  = '<h1>SSAFY에 오신 걸 환경합니다!!!</h1>'
    console.log(message)
  }
  case 'admin': {
    message = `<h1>주인님 안녕하세요!</h1>`
    console.log(message)
  }
  default: {
    message = `<h1>Welcome ${username}</h1>`    
    console.log(message)
  }
}

// 예시 (break 문 사용 X, case 로 들어간 곳 이하 전부 실행 )
// switch(사용자) {
//   case '관리자':{
//     사용자.권한 += '관리자 페이지 접근 권한'
//   }
//   case '일반_사용자':{
//     사용자.권한 += '쓰기'
//   }
//   default: {
//     사용자.권한 += '읽기'
//   }
// }

