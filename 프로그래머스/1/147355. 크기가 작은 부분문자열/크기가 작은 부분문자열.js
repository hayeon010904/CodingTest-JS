//t[0]+t[1] , t[1]+t[2]
function solution(t, p) {
let partArr = []
let part = ''
    for(let i = 0; i<=t.length-p.length; i++){
    for(let y=i; y<i+p.length; y++){
        part += t[y]
    }
        partArr.push(part)
        part = ''
}
 const numArr = partArr.map(i=> Number(i))
 let answer = numArr.filter( i => (i<= Number(p)))
   return answer.length

}