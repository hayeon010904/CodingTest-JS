//가운데 글자..4/2 =2 5/2=2+1 // 7/2=4 근데 인덱스 번호니까
// 홀수: 길이/2 , 짝수: 길이/2-1

function solution(s) {
let arr=[]
arr.push(...s)
const x =s.length/2
return s.length%2===0? 
    arr.slice(x-1,x+1).join('') ://짝수일경우
    arr.slice(x,x+1).toString() //홀수일경우
   
}