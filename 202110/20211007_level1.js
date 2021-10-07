// #1
//이상한 문자 만들기
/**
 *  좋아요를 많이 받은 풀이
 * 	return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
		return a[0].toUpperCase() + a[1].toLowerCase();
	});
 * 
 */
function solution(s) {
	let str = '',
		arr = s.split(' ');
	arr.map((x, i) => {
		x.split('').map(
			(y, j) => (str += j % 2 ? y.toLowerCase() : y.toUpperCase())
		);
		str += i < arr.length - 1 ? ' ' : '';
	});

	return str;
}

// #2
// 약수의 합
// 어차피 합을 구하는 거면 배열로 만들지 않고 sum 으로 누산하는게 더 낫다
function solution(n) {
	if (n === 0) return 0;
	let arr = [1];
	for (let i = 2; i <= n; i++) {
		n % i === 0 && arr.push(i);
	}
	return arr.reduce((a, c) => a + c, 0);
}
