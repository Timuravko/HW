// //1.
// function myIsNaN(value) {
//     if (value.valueOf() === Number(value)) {
//         return false
//     } else {
//        return true 
//     }
// }
// console.log(myIsNaN(10))

// //2.
// function pad(string, symbol, count, addToStart) {
//     let result = '';
    
//     for (let i = 0; i < count - string.length; i++) {
//       result += symbol;
//     }
//     return addToStart ? result + string : string + result;
//   }
//   console.log(pad('testText', '*', 9, true))

//3.
// function getRandomNumbers(count, start = 100, finish = 1000) {
//     let odd = 0;
//     let even = 0;

//     for (let i = 0; i < count; i++) {
//         let randomNumber = Math.floor(Math.random() * (finish - start + 1)) + start;
//         randomNumber % 2 === 0 ? even += 1 : odd += 1;
//     }

//     return { even, odd };
// }
// var { even, odd } = getRandomNumbers(1000);
// console.log(`Even: ${even}, Odd: ${odd}`)