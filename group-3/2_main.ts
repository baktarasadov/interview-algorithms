// input [-12, -12, 120,12,120,30] output=> unique elements total

const solution_3_2 = (arr: number[]): number => [...new Set([...arr])].reduce((a, b) => a + b, 0);


console.log(solution_3_2([-12, -12, 120, 11, 120, 30]));
