const solution = (absolutes, signs) => {
    let answer = 0;
 for(let i = 0; i<= signs.length-1; i++){
!signs[i] ? answer += -absolutes[i] : answer += absolutes[i]
 }
return answer
}
// signs값이 true 이면=> 조건식 참
// answer에다가 그대로/ false이면 -로 부호 변환해서 더해주기
// let result = absolutes.reduce((acc,cur) => acc+cur)