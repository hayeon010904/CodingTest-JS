function solution(s){
const S =  s.toUpperCase()
return S.match(/P/g)?.length === S.match(/Y/g)?.length ? true : false
}