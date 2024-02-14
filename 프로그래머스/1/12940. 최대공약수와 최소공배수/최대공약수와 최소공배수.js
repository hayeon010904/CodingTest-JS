//두 수의 공약수를 먼저 구해야함.
//두 수의 약수를 구하고 같은 수를 배열에!

function solution(n, m) {
//최대공약수 구하기
//약수구하기
    const measureN = []
    const measureM = []
//n의약수
for(let i = 1; i<= n; i++){
    if(n%i === 0) measureN.push(i)
}
//m의약수
for(let i = 1; i<= m; i++){
    if(m%i === 0) measureM.push(i)
}
//두 배열 비교해서 같은 값 뽑기
const CD = measureN.filter(i=> measureM.includes(i))
//최대공약수
const GCD = Math.max(...CD)


//최소공배수찾기
//둘 중 큰 수가 작은 수의 배수일 떄 => 큰수
// 배수가 아닐때 => 두 수 곱한게 최소공배수
let LCM = n*m/GCD
return [GCD,LCM]
}