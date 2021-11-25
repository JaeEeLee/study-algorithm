const n = 5;
const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
const isValidPos = (x, y) => 0 <= x && x < n && 0 <= y && y < n;
const isCorona = (place, x, y) => {
    const chk = Array.from(Array(5), (_) => new Array(5).fill(false));
    const q = [];

    chk[x][y] = true;
    q.push([x, y]);

    let depth = 2;

    while (q.length && depth--) {
        let len = q.length;

        while (len--) {
            [x, y] = q[0];
            q.shift();
            d.forEach((v) => {
                const [nx, ny] = [x + v[0], y + v[1]];
                if (!isValidPos(nx, ny) || chk[nx][ny] || place[nx][ny] === 'X')
                    return;
                q.push([nx, ny]);
                chk[nx][ny] = true;
            });
        }
        const ret = q.reduce(
            (ret, [x, y]) => place[x][y] === 'P' || ret,
            false
        );
        if (ret) return ret;
    }

    return false;
};

const go = (ans, place) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (place[i][j] === 'P' && isCorona(place, i, j)) {
                ans.push(0);
                return ans;
            }
        }
    }

    ans.push(1);
    return ans;
};

function solution(places) {
    return places.reduce(go, []);
}
