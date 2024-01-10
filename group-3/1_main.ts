// input -12, 32, 120 output=> -21, 32, 21

const solution_3_1 = (num: number): number => {
    let numb: number = Number(num.toString().split("").filter(d => d != "-").reverse().join(""))
    return num < 0 ? -numb : numb
}

console.log(solution_3_1(42));
