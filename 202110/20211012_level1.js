//#1
// 두 정수 사이의 합
function solution(a, b) {
	/**
	 * 어떤 수학 천재는..
	 * return ((a + b) * (Math.abs(b - a) + 1)) / 2; //요것이 가우스의 재림
	 * 나도 나름 활용한거였는데ㅠㅠ
	 */
	if (a === b) return a;

	let x = a > b ? a : b;
	let y = a > b ? b : a;

	let div = (x - y) / 2;
	let mult = (x + y) * div;

	return x - div + mult;
}

//#2
// 가운데 글자 가져오기
//substring 써도 되는데!!바보!
function solution(s) {
	let l = s.length;
	return l % 2 ? s[(l - 1) / 2] : s[l / 2 - 1] + s[l / 2];
}
