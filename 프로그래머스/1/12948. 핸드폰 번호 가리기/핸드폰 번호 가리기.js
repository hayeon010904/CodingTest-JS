// 뒷 4자리 빼고 *로
let prvNum =''
const solution = (phone_number)  => {
//전화번호 끝 까지 순회
for(let i=0; i<=phone_number.length-1; i++){
// 마지막 4자리보다 작으면, *로 변환해서 반환.
i < phone_number.length-4 ? prvNum += phone_number[i] = '*'
:  prvNum += phone_number[i]
}
return prvNum
}