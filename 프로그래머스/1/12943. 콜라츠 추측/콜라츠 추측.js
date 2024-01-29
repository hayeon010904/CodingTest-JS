const solution = num => {
  let count = 0;
    // 1이 주어졌을 때 0 반환하고 끝냄.
  if(num===1) return 0 ;
    // 1이 아닐때 계속 반복 => 1이 나오면 반복문 끝
  while (num !== 1) {
    num = (num % 2 === 0 ) ? num / 2 : 3 * num + 1;
    count++;
  }
    // count조건
return count<500? count : -1
}
