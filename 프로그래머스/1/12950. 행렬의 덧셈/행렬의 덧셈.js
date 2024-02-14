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
//ex
//바깥쪽 for문에서 i가 0일 때:
//안쪽 for문에서 y가 0일 때: num = arr1[0][0] + arr2[0][0] → row.push(4)
//안쪽 for문에서 y가 1일 때: num = arr1[0][1] + arr2[0][1] → row.push(6)
//row는 [4, 6]이 되고, answer에 추가

//바깥쪽 for문에서 i가 1일 때:
//안쪽 for문에서 y가 0일 때: num = arr1[1][0] + arr2[1][0] → row.push(7)
//안쪽 for문에서 y가 1일 때: num = arr1[1][1] + arr2[1][1] → row.push(9)
//row는 [7, 9]가 되고, answer에 추가