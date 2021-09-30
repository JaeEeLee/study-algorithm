/**
 * 
 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 */
function solutionPhoneNumber(phone_number) {
	var answer = '';
	var size = phone_number.length;

	for (var i = 0; i < size; i++) {
		answer += i < size - 4 ? '*' : phone_number[i];
	}

	return answer;
}
/**
 * 
 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
 */
function solutionReverseString(s) {
	var answer = s.split('').sort().reverse().join('');
	// var answer = s.split('').reverse().join('');
	/**
	 * reverse 를 사용하기 전에 한 번 sort 를 해준후 reverse 를 해야한다.
	 *
	 */
	return answer;
}
