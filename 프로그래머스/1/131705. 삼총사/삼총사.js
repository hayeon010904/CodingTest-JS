//세명의 학생의 정수번호를 더했을 때 0 -> 삼총사
// 세개씩 짝지어서 .. 더해서 0 이되는 수

function solution(number){
let count= 0
for(let i=0; i<=number.length-1; i++){
    for( let x = i+1; x<=number.length-1; x++){
         for( let y = x+1; y<=number.length-1; y++){
              if(number[i]+ number[x]+ number[y]===0) count++
            }
        }
    }
// i = 0일때 x=1, y=2 부터 시작해서 끝까지 돌아
    return count
}
