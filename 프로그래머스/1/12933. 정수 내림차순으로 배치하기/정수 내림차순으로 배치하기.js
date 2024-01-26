solution = n => {
    const arr = (n+'').split('')
    return Number(arr.sort().reverse().join(''))
}

// 배열에 n을 분리해서 넣고
// 배열 내림차순정렬 sort().reverse()
// 배열을 합쳐주기 join('')
// 숫자로 바꾸기
// Q. const numArr = arr.map(i => Number(i))
// Q. const numArr = arr.forEach(i => Number(i))