function solution(price, money, count) {
// 이용료
let newPrice = 0
for(let i=1; i<=count; i++){
 newPrice += price*i 
}
return newPrice-money>0 ?  newPrice-money:0
}