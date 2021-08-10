'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    
    // Write your code here
    let isAm = s.substr(8, 2) == 'AM'
    let hours = Number(s.substr(0,2))
    let form = s.substr(2, 6)
    // isPm ? hours - 12 : 
    let check = hours >= 12
    hours = hours % 12
    if(!isAm){
        hours += 12
    }
    if(hours.toString().length == 1){
        hours = '0' + hours
    }
    form = hours + form
    console.log(form)
    return form
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
