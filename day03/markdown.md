#### 2019.10.31 (목)



`https://github.com/axios/axios`

```javascript
// 자바스크립트로 요청 보내는 객체
// 나의 페이지 그대로 있는데 새로고침 없이 특정 위치로 요청 보내서 응답 받을 수 있음
// 이를 위해 비동기 동작 
const XHR = new XMLHTttpRequest # 새로운 class 생성
const url = 'http://jsonplaceholder.typicode.com/posts/1'
```

```javascript
XHR.addEventListener('load', function(event) {
console.log(event)
})
```

```javascript
$ npm init
```

```javascript
$ npm install axios
```

```javascript
$ vi ../.gitignore
```

```
const axios = require('axios')
```
* axios 