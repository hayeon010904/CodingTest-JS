//내적이 뭔데 ... 
let result = 0
const solution = (a, b) =>  {
    for(let i = 0; i<=a.length-1; i++){
    result += a[i]*b[i]
    }
    return result
}