// input 434 output=> 4*3*4 - 4+3+4 

const solution_9_1 = (num: number): number => {
    let array: number[] = num.toString().split("").map(Number);
    return array.reduce((i, f) => i * f, 1) - array.reduce((i, f) => i + f, 0)
}

console.log(solution_9_1(434));
