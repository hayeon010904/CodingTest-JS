//24.01.23

let answer = [];
solution = (n) => { 
const StrigArr = (n+'').split('').reverse();
const answer = StrigArr.map(i=>{return Number(i)})
return answer;
}


//숫자를 배열에 넣기 -> split해서 해야함.-> split은 문자열만(x)
//숫자를 문자로-> 문자를 나누기-> 안에 있는 것들 숫자로 바꾸기-> 뒤집기(0)
// map으로 새롭게 만든 배열을 반환해야하는데 계속 이전 문자열을 반환해서 오답나왔음
// 배열을 뒤집기 (문자,숫자다 가능) reverse()
// 문자열 나누기 .split('')
// map()=> 모든 요소 순회하고 새로운 배열 반환