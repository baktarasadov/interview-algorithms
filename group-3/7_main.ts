// const getFindMaxNumber = (array: number[]): number => {
//     let max: number = array[0];
//     for (let i: number = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }

//     }
//     return max;
// }

const getFindMaxNumber = (array: number[]): number => Math.max(...array)

console.log(getFindMaxNumber([2, 3, 4, 5, 6, 6, 12]));
