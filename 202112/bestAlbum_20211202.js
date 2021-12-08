function solution(genres, plays) {
    let temp = new Array();
    let answer = [];

    genres.map((v, i) => {
        temp.push({
            index: i,
            genre: v,
            play: plays[i],
        });
    });

    temp.sort((a, b) => {
        if (a.play === b.play) {
            return b.index - a.index;
        }
        if (a.genre === b.genre) {
            return b.play - a.play;
        }
        return b.play - a.play;
    });

    const popular = temp[0].genre;
    temp.map((v) => {
        if (v.genre == popular) {
            if (answer.length < 2) answer.push(v.index);
        }
        return v;
    }).map((v) => {
        if (v.genre !== popular) {
            if (answer.length < 4) answer.push(v.index);
        }
    });
    return answer;
    //     return plays.sort((a, b) => {
    //         let songA = a;
    //         let songB = b;
    //         return b - a;
    //     });
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));

const gg = [{ index: 0, genre: 'pop', conut: 500 }];
