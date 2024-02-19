function solution(s) {
    let newArr = []
    const splitArr = s.split(' ') // ['try', 'hello', 'world']
for(let y=0; y<=splitArr.length-1; y++){
    for(let i = 0; i<= splitArr[y].length-1; i++){
 if( i===0 || i%2 === 0){ newArr.push(splitArr[y][i].toUpperCase()) }
    else{ newArr.push(splitArr[y][i].toLowerCase()) }       
    } newArr.push(' ')

}
    // let anwer = ''
    // for(let i =0; i<= newArr.length-1; i++){
    //     anwer += newArr[i]
    // }
  const answer = newArr.join('')
  const arrrr =answer.slice(0,-1)
  return arrrr
}
