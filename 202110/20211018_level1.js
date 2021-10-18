console.log(solution());
//#1
// 다트 게임
//stack 구조..!
function solution(dartResult = '1S2D*3T') {
	let obj = { S: 1, T: 3, D: 2 };
	let arr = [];
	dartResult = dartResult.replace('10', '@');
	for (const i in dartResult) {
		let s = dartResult[i];
		if (!isNaN(s) || s === '@') {
			score = s === '@' ? 10 : Number(dartResult[i]);
		} else if (['S', 'T', 'D'].includes(s)) {
			let n = arr.pop();
			arr.push(Math.pow(n, obj[s]));
		} else if (s === '*') {
			arr[arr.length - 2] = arr[arr.length - 2] * 2;
			arr[arr.length - 1] = arr[arr.length - 1] * 2;
		} else if (s === '#') {
			let n = arr.pop() * -1;
			arr.push(n);
		}
	}

	return arr.reduce((a, b) => a + b, 0);
}

// 다른이의풀이
function solution(dartResult) {
	let answer = 0;
	let score = 0;
	let cnt = [];

	for (let i = 0; i < dartResult.length; i++) {
		if (!isNaN(dartResult[i])) {
			score =
				Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
		} else if (dartResult[i] === 'S') {
			cnt.push(score);
		} else if (dartResult[i] === 'D') {
			cnt.push(Math.pow(score, 2));
		} else if (dartResult[i] === 'T') {
			cnt.push(Math.pow(score, 3));
		} else if (dartResult[i] === '*') {
			cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
			cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
		} else if (dartResult[i] === '#') {
			cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
		}
	}
	answer = cnt.reduce((a, b) => a + b, 0);
	return answer;
}
