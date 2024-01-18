// 24.01.18
// n을 x로 나눈 나머지가 1 n%x === 1 / =>  여기서 x 찾기

function solution(n){
    for(let x = 0; x<=n; x++){
        if(n%x===1) return x;
    }
}



// function solution(n) {
//     let x = 0;
//     if(n%x === 1){
//         return x;
//     } //undefined
  
// }