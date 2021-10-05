// #1
// 정수 제곱근 판별
/**
 * isInteger() : 정수인지 아닌지 판별
 * k%1 == 0 : 정수 판별 가능
 */
function solution(n) {
	let cal = Math.sqrt(n);
	return Number.isInteger(cal) ? (cal + 1) * (cal + 1) : -1;
}

//#2
// 정수 내림차순으로 배치하기
function solution(n) {
	let answer = n
		.toString()
		.split('')
		.sort((a, b) => b - a)
		.join('');
	return Number(answer);
}

//#3
// 자연수 뒤집어 배열로 만들기
function solution(n) {
	return (n + '')
		.split('') //.sort() 하면 오답! : 그저 정렬하는것이 아니라 뒤집는 문제이기 때문에
		.reverse()
		.map((v) => Number(v));
}

// #4
// 자릿수 더하기
function solution(n) {
	return n
		.toString()
		.split('')
		.reduce((acc, cur) => {
			return Number(acc) + Number(cur); // acc 는 넘어오는 값이므로 initial 값을 주었다면 굳이 parsing 할 필요가 없다
		}, 0);
}
