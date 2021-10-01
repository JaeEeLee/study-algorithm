const params = [
	[70, 49, 90], //70
	[68, 50, 38], // pass
	[73, 31, 100], //73
];

console.log(averageScore(params));
//문제 이해 실패 ..
function averageScore(scores) {
	let answer = '';
	let average = [];
	average = scores.map((v, i) => {
		let min = Math.min(...v);
		let max = Math.max(...v);
		let sum = 0;
		for (let j = 0; j < v.length; j++) {
			let s = scores[j][i];
			// if(s == min || s == max) {

			// }
			// sum += i ==j ? 0 :scores[j][i]
			if (i === j) {
				sum += s > min && s < max ? scores[j][i] : 0;
			} else {
				sum += scores[j][i];
			}
		}
		return sum;
		// return sum / v.length;
	});
	console.log(average);
	return answer;
}
