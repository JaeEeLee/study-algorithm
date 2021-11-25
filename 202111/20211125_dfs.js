const getSubsets = function (arr) {
    let flag = new Array(arr.length).fill(false);
    console.log(flag);
    const subSets = [];

    const subSet = function DFS(depth) {
        //arr = [1,2,3]
        // 부분 집합 구하는 재귀 함수, DFS 알고리즘
        if (depth === arr.length) {
            // 1. 0 === 3
            // 2. 1 === 3
            // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
            const subSetRes = arr.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
            subSets.push(subSetRes); // 부분집합들을 담는 배열에 push

            return;
        }

        const ar = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ];
        ar[0][0];
        ar[1][0];
        ar[2][0];
        ar[3][0];
        ar[4][0];

        const re = [
            [4, 3],
            [2, 2, 5],
            [1, 5, 4, 1],
        ];
        //--- 0
        // 1. flag[0] = true
        // 2. flag[1] = true
        // 3. flag[2] = true
        //return
        // --- 0
        // flag[0] = false
        // subset(0 + 1) = 1
        // subset(1 + 1) = 2
        // subset(2 + 1) = 3

        flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽
        subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

        flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
        subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    };

    subSet(0); // depth 0 부터 시작
    return subSets;
};

const example = [1, 2, 3];
const result = getSubsets(example);
console.log(result);
