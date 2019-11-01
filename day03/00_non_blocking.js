function sleep_3() {
  setTimeout(function(){
console.log('Wake UP!!!!')
  }, 3000)
}
// 3000 밀리 세컨드 = 3초 

// setTimeout : 비동기함수 : non blocking 하다 

console.log('Start Sleeping!!')
sleep_3()
console.log('End of Program')


/*
$ python 00_blocking.py
Start Sleeping
Wake Up
End of Program


$ node 00_non_blocking.js
Start Sleeping!!
End of Program
Wake UP!!!!
*/