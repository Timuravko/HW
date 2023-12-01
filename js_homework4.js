// 1.1
var size = 20
var counter = 0
while(counter <= size) {
    let tringle = ''
    for (let i = 0; i < counter; i++) {
        tringle += '*'
    }
    console.log(tringle)
    counter++
}


// 1.2
var triangle = '';
limit = 20;
while (limit > 0) {
    console.log( triangle += '*' )
    limit -= 1;
}


// 2.
for (let a = 0; a <= 100; a++) {
    if (a % 3 !== 0) console.log('result: a = ' +a)
}


// 3.
let number = 2;
let degree = 3;
let answer = 1;
for(let i = 0; i < degree; i++) {
    answer = answer * number;
}
console.log(answer)
