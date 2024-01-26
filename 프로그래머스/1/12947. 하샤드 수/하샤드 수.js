// 하샤드: x % x 자리수의 합 === 0 
function solution(x) {
    // 자리수의 합
    let sum=0
    const stringArr = (x+'').split('')
    stringArr.forEach(i=> sum += Number(i))
    // 하샤드 수 구하기
   return x % sum === 0 ? true : false
}