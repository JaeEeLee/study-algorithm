//크레인 인형 뽑기
function solution(board, moves) {
    let q = new Array();
    let box = new Array();

    for (let i = 0; i < board.length; i++) {
        let temp = [];
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] > 0) {
                temp.push(board[j][i]);
            }
        }
        q.push(temp);
    }

    let num = 0;
    moves.map((v, i) => {
        let s = q[v - 1].shift();
        if (s) {
            if (box[box.length - 1] === s) {
                box.pop();
                num += 2;
            } else {
                box.push(s);
            }
        }
    });

    return num;
}
