//24.1.21
//숫자 각각을 배열에 담아주고 배열 각 요소의 합

let result=0; 
function solution(n){
    // (n+'') => 숫자를 문자열로
const StringArr = (n+'').split('')
const numArr = StringArr.map((item)=>{
   return + item
        // (+ item) => 문자를 숫자로
})
numArr.forEach((item)=>{result += item
})
    return result
}

//사용할 수 있는 메서드: split(''), Number()=> +, String()=>+''
// console.log(StringArr) [ '1', '2', '3' ]
// console.log(numArr) [ 1, 2, 3 ]