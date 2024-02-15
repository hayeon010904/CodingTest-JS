//효율성에서 오답,,
function solution(arr){
let answer = []
for(let i = 0; i<arr.length; i++){
arr[i] === arr[i+1] ? '' : answer.push(arr[i])
}
return answer
}
//스택 큐 !
// 큐; 줄서기 구조 활용???????????????
// function solution(arr){
// let answer = []
// arr.forEach(i=> if(arr[i] === arr[i+1]){return arr.shift()})


// return answer
// }



   

   

    
