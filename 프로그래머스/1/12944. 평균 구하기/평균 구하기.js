// 23.01.18(목)
// 배열의 평균값 => 배열요소 다 더하고 배열의길이로 나누기
// 배열 요소 다 더하기-> forEach 
// 배열의 길이->arr.length
let result = 0;
function solution(arr){
    arr.forEach(i=>{result += i;})
     return result / arr.length;
}
     

//오답
// let result;
// function solution(arr) {
//     arr.forEach(function(i) {
//     result += i;
//     })
//       return result / arr.length;
  
// }