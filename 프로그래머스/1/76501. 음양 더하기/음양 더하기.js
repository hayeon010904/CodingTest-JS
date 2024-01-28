const solution = (absolutes, signs) => {
 for(let i = 0; i<= signs.length-1; i++){
signs[i] === false ? absolutes[i] = (-absolutes[i]) : absolutes[i]
 }
let result = absolutes.reduce((acc,cur) => acc+cur)
return result
}
