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