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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    // const dict = {}
    // for (let i=0; i<candles.length; i++){
    //     if (dict[candles[i]]){
    //         dict[candles[i]]++
    //     } else {
    //         dict[candles[i]]=1
    //     }
    // }
    // // console.log(Object.keys(dict).length)
    // return (Object.values(dict).sort()[Object.keys(dict).length-1])
    const maxHeight = Math.max(...candles)
    return (candles.filter(el => el == maxHeight).length)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
