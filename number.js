// 1-Number-Pattern:-
// 1
// 12
// 123
// 1234
// 12345

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         res += `${j}`
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 2-Number-Pattern:-
// 1
// 22
// 333
// 4444
// 55555

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         res += `${i}`
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 3-Number-Pattern:-
// 1
// 23
// 456
// 78910

// res = "";
// let count = 1;
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         res += count;
//         count++;
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 4-Number-Pattern:-
// 12345
// 1234
// 123
// 12
// 1

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i + 1; j++) {
//         res += j;
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 5-Number-Pattern:-
//     1
//    123
//   12345
//  1234567
// 123456789

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         res += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         res += k;
//     }
//     res += `\n`;
// }
// console.log(res);