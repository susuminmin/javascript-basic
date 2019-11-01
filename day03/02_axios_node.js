const axios = require('axios')
// import 

const url = `https://jsonplaceholder.typicode.com/posts/1`

// request.get 느낌
axios.get(url) // 함수에 응답 담김
  .then(function(response) {
    console.log(response.data) // 응답받은 data 출력
  })