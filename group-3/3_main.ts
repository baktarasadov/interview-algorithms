// input `[2,4,3] [5,6,4]` output=> 342+465

const solution_3_3 = (arr: number[], arrr: number[]): number => Number(arr.reverse().join('')) + Number(arrr.reverse().join(''))


console.log(solution_3_3([2, 4, 3], [5, 6, 4]));
