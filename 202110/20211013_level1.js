// #1
// 같은 숫자는 싫어
function solution(arr){
    let res = [arr[0]]
    arr.reduce((ac, cu) => {
        if(ac !== cu) res.push(cu)
        return ac === cu ? ac : cu
    })
    
    return res
}