function solution(arr) {
    if(arr.length === 1) return [-1]
   const min = Math.min(...arr)
    arr.indexOf(min)
    arr.splice(arr.indexOf(min),1)
    return arr
}


// let answer = []
// function solution(arr) {
//     if(arr.length === 1) return [-1];
//     arr.sort((a,b)=>b-a)
// for(let i =0; i<arr.length-1; i++){
//     answer.push(arr[i])
// }
//     return answer
// }

// const arr = [5]
// function solution(arr) {
// const answer = arr.sort((a,b)=>(b-a)).splice(arr.length-1,1)
// return arr.length===1 ? [-1] : answer;
// }
// console.log(solution(arr))