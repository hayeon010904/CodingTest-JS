// ex)numbers=[2,5,1]
// 0-9더한것에서 numbers 안에 있는거 더한거빼기.
const solution = numbers => {
   // number안에 있는 거 더하기
    const sum = numbers.reduce((arr,cur)=>{
        return arr+cur
    })
    //0부터 9까지 수 더하기 등차수열.. (n(n+1)/2)
       return (9*10/2) - sum
 
}