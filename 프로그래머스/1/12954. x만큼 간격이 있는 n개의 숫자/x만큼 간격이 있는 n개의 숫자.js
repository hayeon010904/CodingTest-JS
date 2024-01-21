//24.1.21
//x부터 시작해서 x 씩 증가하는 리스트=> ex) [4,8,12] n (n)+n (n+n)+n 
const solution = (x, n)  => {
    let answer = [];
    for(let i=0; i<n; i++){
        answer.push(x+i*x)
    }
    return answer;
}






// //1. 결과담는 배열 생성
// let result = []; 
// // 결과함수
// function solution(x, n) {
// // 배열에 담아줌
// result.push(x)
// // n개동안 반복
// while(result.length<n){
// // 이전인덱스 + x 
//     for(let i = 0; i<n-1; i++)
//      solution(result[i]+x)
// }
//    return result;
// }