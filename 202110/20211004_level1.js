//Ipad note

// #1
//x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
	var answer = [];
	for (var i = 1; i <= n; i++) {
		answer[i - 1] = i * x;
	}

	return answer;
}

// #2
// 핸드폰 번호 가리기
function solution(phone_number) {
	var answer = '';
	var condition = phone_number.length - 5;
	for (var i = 0; i < phone_number.length; i++) {
		answer += i > condition ? phone_number[i] : '*';
	}
	return answer;
}

//#3
//직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
	const n = data.split(' ');
	const a = Number(n[0]),
		b = Number(n[1]);

	let answer = '';
	for (let i = 0; i < b; i++) {
		//0, 1, 2
		for (let j = 0; j < a; j++) {
			answer += j == a - 1 ? '*\n' : '*';
		}
	}
	console.log(answer);
});

//#4
// 평균 구하기
function solution(arr) {
	return arr.reduce((ac, cu) => ac + cu, 0) / arr.length;
}

//#5
// 하샤드 수
function solution(x) {
	let sum = 0;
	sum = x
		.toString()
		.split('')
		.reduce((acc, curr) => Number(acc) + Number(curr), 0);

	return x % sum === 0;
}

//#6
// 행렬의 덧셈
function solution(arr1, arr2) {
	let answer = [[]];
	arr1.map((x, i) => {
		answer[i] = x.map((y, j) => y + arr2[i][j]);
	});

	return answer;
}
