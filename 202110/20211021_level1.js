//#1
// 2016
function solution(a, b) {
	let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	let index = new Date(`2016-${a}-${b}`).getDay();

	return days[index];
}
