// #1
// 나머지가 1인 수 찾기
function solution(n) {
    let i = 1
    while(true){
        if(n % i === 1) break
        i++
    }
    return i
}


// #2
// 나누어 떨어지는 수
function solution(arr, divisor) {
    let res = arr.filter((v) => v % divisor === 0)
    return res.length ? res.sort((a, b) => a - b) : [-1]
}
