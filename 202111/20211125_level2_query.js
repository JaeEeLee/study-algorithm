const q = [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
];
const i = [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
];

function solution(info, query) {
    let candidate = new Array();
    let questions = new Array();
    let result = new Array();

    query.map((v, i) => {
        const [lang, yard, fresh, food, score] = v
            .split(' ')
            .filter((s, j) => ![1, 3, 5].includes(j));
        questions.push({
            lang,
            yard,
            fresh,
            food,
            score,
        });
    });

    info.map((v, i) => {
        const [lang, yard, fresh, food, score] = v.split(' ');
        candidate.push({
            lang,
            yard,
            fresh,
            food,
            score,
        });
    });

    questions.map((v, i) => {
        let num = 0;

        candidate.forEach((person) => {
            let condition = 0;
            if (v.lang === person.lang || v.lang === '-') {
                condition++;
            }
            if (v.yard === person.yard || v.yard === '-') {
                condition++;
            }
            if (v.fresh === person.fresh || v.fresh === '-') {
                condition++;
            }
            if (v.food === person.food || v.food === '-') {
                condition++;
            }
            if (Number(v.score) <= Number(person.score)) {
                condition++;
            }

            if (condition === 5) {
                num++;
            }
        });
        result.push(num);
    });

    return result;
}

const res = solution(i, q);

console.log(res);
