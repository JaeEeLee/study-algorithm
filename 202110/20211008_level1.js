// #1
// 시저 암호 구하기
// 20211008 진행중
// const res = solution('a B z', 4);
// const res = solution('AB', 1)

function secretLetter(s, n) {
	const abc = alphabet();
	let obj = [];

	s.split('').map((v) => {
		if (v === ' ') return obj.push(' ');

		let chk = isUpperCase(v);
		if (chk) v = v.toLowerCase();

		let num = abc.indexOf(v) + n;
		if (num > 25) num %= abc.length;

		let str = abc.substr(num, 1);

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

// #2
// 문자열을 정수로 바꾸기
// let a = '1234'
// console.log(translateNumber('-1234'));
function translateNumber(s) {
	// return s / 1; // 사칙연산을 활용할수도 있다..!
	return Number(s);
}

//#3
//수박수박수박
console.log(subaksubak(4));
function subaksubak(n) {
	let i = 1,
		str = '수';

	while (i < n) {
		str += i % 2 ? '박' : '수';
		i++;
	}

	return str;
}
