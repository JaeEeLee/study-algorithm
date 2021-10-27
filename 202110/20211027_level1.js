// #1
// k번째수
/**
 * javascript 에서 sort의 기본 정렬은 문자열의 유니코드 코드 포인트를 따라간다! 
 * 따라서 Array.prototype.sort() 메서드로 숫자 정렬시 매개변수인 compareFunction 함수를 지정해주어야 한다~!
 *  */ 
function solution(array, commands) {
    let res = []
    commands.map((v) => {
        let temp = array.slice(v[0] -1, v[1]).sort((a,b) => a - b)
        res.push(temp[v[2] -1])
    })

    return res
}