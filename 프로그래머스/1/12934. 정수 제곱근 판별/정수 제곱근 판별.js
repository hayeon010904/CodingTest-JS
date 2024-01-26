function solution(n) {
return Math.sqrt(n)%1 === 0 ? (Math.sqrt(n)+1)**2: -1
}

// n은 어떤 양의 정수 x의 제곱 ex. n=4 , x=2 
// x*x = n -> 루트 n

//Math.sqrt() => 루트연산자
// 루트연산했을때의 나머지가 0 => 양의정수라는 뜻.
// + Number.inInteger() => 정수인지 판단하는