let answer = []
function solution(arr1, arr2) {
    //배열의 길이가 같으면
if(arr1.length === arr2.length){
    // 바깥배열
    for(let i = 0; i< arr1.length; i++){
        // 안쪽배열
        let row = []
            for(let y = 0; y< arr1[i].length; y++){
          let num = arr1[i][y] + arr2[i][y] 
          row.push(num)
        }
        answer.push(row)
    }
}
return answer}