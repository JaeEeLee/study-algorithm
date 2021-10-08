// #1
// 시저 암호 구하기
// 20211008 진행중
const res = solution('a B z', 4);
// const res = solution('AB', 1)
console.log(res);

function solution(s, n) {
	const abc = alphabet();
	let obj = [];

	s.split('').map((v) => {
		if (v === ' ') return obj.push(' ');

		let chk = isUpperCase(v);
		if (chk) v = v.toLowerCase();

		let num = abc.indexOf(v) + n;
		if (num > 25) num %= abc.length;

		let str = abc.substr(num, 1);

		if (!str) str = 'a';
		if (chk) str = str.toUpperCase();

		obj.push(str);
	});

	return obj.join('');
}

function alphabet() {
	let str = '';
	for (let i = 97; i <= 122; i++) {
		str += String.fromCharCode(i);
	}

	return str;
}

function isUpperCase(str) {
	return str === str.toUpperCase();
}
