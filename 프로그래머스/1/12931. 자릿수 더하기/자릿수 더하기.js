//24.1.21
//숫자 각각을 배열에 담아주고 배열 각 요소의 합
//사용메서드: split(''), String(), Number()
let result=0; // 결과
function solution(n){
let toString = String(n)
console.log(typeof toString) //string
const StringArr = toString.split('')
console.log(StringArr) //[ '1', '2', '3' ]
const numArr = StringArr.map((item)=>{
   return Number(item)
})
console.log(numArr) //[ 1, 2, 3 ]
numArr.forEach((item)=>{
result += item
})
return result
}