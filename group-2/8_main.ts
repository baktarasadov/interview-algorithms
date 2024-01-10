// input 5 output=> 1.-1,2,-2,0 

const solution_8_1 = (mum: number): number[] => {
    let array: number[] = []
    if (mum % 2 !== 0) {
        array.unshift(0)
    }
    for (let i: number = 1; i <= mum / 2; i++) {
        array.push(i)
        array.push(-i)
    }
    return array
}

console.log(solution_8_1(6));
