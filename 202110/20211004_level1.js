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

// #7
// 콜라츠 추측
function solution(num) {
	let check = num;
	let count = 0;

	while (check != 1) {
		count++;
		check = check % 2 === 0 ? check / 2 : check * 3 + 1;

		if (count === 500) {
			return -1;
		}
	}

	return count;
}

// #8
// 최대공약수와 최소공배수
/**
 * 최대공약수는 유클리드 호제법을 이용해서 최대공약수를 구하고 최소공배수는 두 수의 곱을 최대공약수로 나누어서 구한다.
 *
 * 유클리드 호제법
 * a,b 를 서로를 나눈다. 만약 나누어진다면 b가 최대공약수이다.(a > b이다.)
 * 만약 서로가 나누어지지 않는다면 b와 a % b(a를 b로 나눈 나머지) 다시 나눈다.
 * 서로가 나누어진다면 a % b가 최대공약수이다. 만약 나누어지지 않는다면 다시 위 방법을 반복한다.
 *
 */
function solution(n, m) {
	const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y));
	const lcm = (x, y, num) => (x * y) / num;

	let gcdIs = gcd(n, m);
	let lcmIs = lcm(n, m, gcdIs);

	return [gcdIs, lcmIs];
}

// #9
//짝수 홀수 구하기
// 오징어게임: 내가~ 뭐라~~ 그랬더라~~?
function solution(num) {
	return num % 2 ? 'Odd' : 'Even';
}
