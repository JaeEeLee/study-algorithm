// 에라토스테네스의 체
// #1
/**
 * 에라토스테네스가 발견한 소수를 찾는 방법이다. 위에서 모든 자연수는 소수들의 곱으로 표현된다고 했다.
 * 그래서 에라토스테네스는 주어진 숫자 값의 범위 안에서, 자기 자신을 제외한 배수 값을 지워 나갔다.
 * 결국 소수만 남게 된다.
 * 어떤 값을 입력받고 소수를 출력하는 것이 아닌, 입력 받은 숫자 까지의 정수 중 소수의 개수를 구해야 할 때 유용하다.
 */
// console.log(solution());
function solution(n = 10) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	for (let i = 1; i * i < n; i++) {
		if (arr[i]) {
			let x = arr[i];
			for (let j = x * x; j <= n; j += x) {
				arr[j - 1] = 0;
			}
		}
	}

	let res = arr.filter((y) => y);
	res.shift();
	return res.length;
}

// 또다른 풀이
function solution(n) {
	const s = new Set();
	for (let i = 1; i <= n; i += 2) {
		s.add(i);
	}
	s.delete(1);
	s.add(2);
	for (let j = 3; j < Math.sqrt(n); j++) {
		if (s.has(j)) {
			for (let k = j * 2; k <= n; k += j) {
				s.delete(k);
			}
		}
	}
	return s.size;
}

// #2
// 김서방 찾기
function solution(seoul) {
	return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}
