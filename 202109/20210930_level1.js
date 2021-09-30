/**
 * 
 
let a = [4, 7, 12];
let b = [true, false, true];

console.log(calculateAbsolute(a, b));

*/
function calculateAbsolute(absolutes, signs) {
	return absolutes.reduce(
		(acc, curr, idx) => acc + curr * (signs[idx] ? 1 : -1),
		0
	);
}

/*console.log(SumNoneNumber());*/

function SumNoneNumber(numbers = [1, 2, 3, 4, 6, 7, 8, 0]) {
	return 45 - numbers.reduce((acc, curr) => acc + curr, 0);
}
