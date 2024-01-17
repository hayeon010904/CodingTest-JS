let answer = 0;
const solution = n => {
     for(let i =0; i<= n; i++){
        if(n%i === 0){
          answer += i;
        }
   }
return answer;}
   
    
// 23.11.17
// 약수구하기 : for문으로 n까지 반복, n으로 나눴을 때 나머지가 0 이면 약수!
// 약수인 경우, 결과에 +!

// + return을 어디에 붙여주느냐에 따라 달라짐
// // let answer = 0;
// function solution(n) {
//     for(let i =0; i<= n; i++){
//         if(n%i === 0){
//           answer += i;
//         }
//   return answer } //undefined

// return answer;}
// // let answer = 0;
// function solution(n) {
//     for(let i =0; i<= n; i++){
//         if(n%i === 0){
//          return answer += i;
//         }
//    }
// }
