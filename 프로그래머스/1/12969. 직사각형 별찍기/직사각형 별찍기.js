//출력된것을 *로 
process.stdin.setEncoding('utf8');
//'data'이벤트: 사용자가 data를 입력하면 data 변수에는 "10 20"이렇게 공백으로 들어감
process.stdin.on('data', data => {
    // [10,20]으로 나눠주기
    const n = data.split(" ");
    // a=10/ b=20
    const a = Number(n[0]), b = Number(n[1]);
   
    const newA = '*'.repeat(a);
    const newB = '*'.repeat(b);
    for (let i = 0; i < b; i++) {
    console.log(newA);
}
   
});
