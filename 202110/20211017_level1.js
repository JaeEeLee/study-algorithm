//#1
// [1차] 비밀지도
function solution(n, arr1, arr2) {
    let temp1 = toParseString(arr1, n)
    let temp2 = toParseString(arr2, n)
    let answer = []
    temp1.map((v, i) => {
        let str = '', j = 0
        while (j < n) {
            str += v[j] === '0' && v[j] === temp2[i][j] ? ' ' : '#'
            j++
        }
        answer.push(str)
    })
    return answer

}

function toParseString(arr, n) {
    let temp = []
    arr.map((v) => {
        let str = v.toString(2)
        if (str.length < n) {
            let i = '0', j = str.length
            while (j < n - 1) {
                i += '0'
                j++
            }
            str = i + str
        }
        temp.push(str)
    })
    return temp
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))


// 다른 사람 풀이 repeat, replace, 정규표현식 메모..
function solutionOthers(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}