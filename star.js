// 1. Star-Pattern:-
// *****
// *****
// *****
// *****
// *****

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         res += `*`;
//     }
//     res += `\n`;
// }
// console.log(res);


// -----------------------------------------

// 2. Star-Pattern:-
// *
// **
// ***
// ****
// *****

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         res += `*`;
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 3. Star-Pattern:-
//     *
//    **
//   ***
//  ****
// *****

// let res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//         res += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         res += "*";
//     }
//     res += `\n`
// }
// console.log(res);

// -----------------------------------------

// 4. Star-Pattern:-
// *****
// ****
// ***
// **
// *

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         res += `*`;
//     }
//     res += `\n`
// }
// console.log(res);

// 5. Star-Pattern:-
//     *
//    ***
//   *****
//  *******
// *********

// res = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         res += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         res += `*`;
//     }
//     res += `\n`;
// }
// console.log(res);

// -----------------------------------------

// 6. Star-Pattern:-

// i % 3 & 5 print "*",
// i % 5 print "#",
// i % 3 print "@".

// let n = 30;
// for (let i = 1; i <= n; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log("*");
//     }
//     else if (i % 5 == 0) {
//         console.log("#");
//     }
//     else if (i % 3 == 0) {
//         console.log("@")
//     }
//     else {
//         console.log(i);
//     }
// }

let a = 100;
for (let i = 1; i <= a; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBizz");
    }
    else if (i % 5 == 0) {
        console.log("Bizz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}