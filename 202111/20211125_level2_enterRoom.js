//오픈채팅방
function solution(record) {
    let log = new Array();
    let user = new Object();
    let result = new Array();

    record.map((v) => {
        let strArr = v.split(' ');
        if (strArr[0] !== 'Change') {
            log.push({ [strArr[0]]: strArr[1] });
        }
        if (strArr[2]) {
            user[strArr[1]] = strArr[2];
        }
    });

    log.map((l) => {
        let str = '';
        Object.keys(l).map((k, i) => {
            str = `${user[l[k]]}님이 `;
            str += k === 'Enter' ? '들어왔습니다.' : '나갔습니다.';
        });
        result.push(str);
    });

    return result;
}
