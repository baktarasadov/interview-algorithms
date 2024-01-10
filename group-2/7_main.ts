// input [122,232,123,3223]=> output=>element length$2==0 ? 1

const solution_7_1 = (array: number[]): number => {
    let count: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i].toString().length % 2 == 0)
            count++;
    }
    return count
}
const solution_7_2 = (array: number[]): number => array.filter(data => data.toString().length % 2 == 0).length

console.log(solution_7_2([122, 232, 123, 3223]));
