// input [1,2,3,4,4,3,2,1] output=> [1,4,2,3,3,2,4,1] 

const solution_10_1 = (array: number[], num: number): number[] => {
    let arrayR: number[] = []
    for (let index: number = 0; index < num; index++) {
        arrayR.push(array[index])
        arrayR.push(array[index + num])
    }
    return arrayR
}

console.log(solution_10_1([1, 2, 3, 4, 4, 3, 2, 1], 4));
