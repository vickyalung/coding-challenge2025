// WPU Coding Challenge 2026
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

//=========== Cara Pertama ==============
// function countBy(x, n) {
//   let z = [];
// for (let i = 1; i <= n; i++){
//  z.push(i * x);
// }
//   return z;
// }

//============= Cara Kedua =================
// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x);
// }

//============ Cara Ketiga =================
// Menjadi satu Baris
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(1, 10));