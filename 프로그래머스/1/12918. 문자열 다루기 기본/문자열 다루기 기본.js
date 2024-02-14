///[^0-9]/g => 숫자 값 
// 문자열 s가 정규식에 부합하면(문자가 있으면) ? 

// function solution(s) {
// const IsString = /[^0-9]/g
// if(s.length === 4){
//     return s.match(IsString)? false : true
// }else if(s.length === 6){
//       return s.match(IsString)? false : true
// }else{
//     return false
// } 
// }
function solution(s) {
const IsString = /[^0-9]/g
if(s.length === 4 ||s.length === 6){
    return s.match(IsString)? false : true
}else{
    return false
} 
}
