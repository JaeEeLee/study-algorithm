// #1
// 시저 암호 구하기
// 20211008 진행중
function secretCode() {
	solution();
	function solution(s, n) {
		const a = alphabet();
		let obj = [];
		s.split('').map((v) => {
			let num = a.indexOf(v);
			let str = a.substr(num + n, 1);
			if (isUpperCase(v)) str = str.toUpperCase();

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
}
