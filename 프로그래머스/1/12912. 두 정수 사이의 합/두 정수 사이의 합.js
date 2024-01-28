// a부터 시작해서 +1 b까지 for문
function solution(a, b) {
    let result= 0;
    if(b>=a){
            for(let x = a; a <= b; a++){
         result += a}
     }else if(a>b){
          for(let x = b; b <= a; b++){
        result += b}
    }
return result
}


