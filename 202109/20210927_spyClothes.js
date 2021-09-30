// 최종
function solution(clothes) {
	var answer = 1;
	var kind = {};

	for (var i = 0; i < clothes.length; i++) {
		kind[clothes[i][1]] = (kind[clothes[i][1]] || 1) + 1;
	}

	Object.keys(kind).map((v) => {
		answer *= kind[v];
	});

	return answer - 1;
}

/**
 * 삽질.. 너무 어렵게 생각했다
 * 
 * function solution(clothes) {
    var answer = 0;
    var kind = {}
    
    // for(var i = 0; i < clothes.length; i++) {
    //     if(kind.hasOwnProperty(clothes[i][1])) {
    //         kind[clothes[i][1]].push(clothes[i][0])
    //     } else {
    //         kind[clothes[i][1]] = [clothes[i][0]]
    //     }
    // }
    
    // var cnt = Object.keys(kind).length === 1 ? 0 : 1;
    var cnt = 1
    // for(var i = 0; i < Object.keys(kind).length + 1; i++){
    //     let a = Object.keys(kind)
    //     a = a[i]
    //     answer += i
    //     cnt *= kind[a].length
    // }
    // Object.keys(kind).map((v, i) => {
    //     answer += kind[v].length
    //     cnt *= kind[v].length
    // })

    // answer += cnt
    answer = answer === cnt ? answer : answer + cnt
    return answer;
}
*/
