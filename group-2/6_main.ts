// input [[4,3,-1],[2,-1,-2,-3],[3,4,5]]=> output=>minus data length ? 4

const solution_6_1 = (array: number[][]): number => {
    let count: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = 0; j < array[i].length; j++) {
            if (array[i][j] < 0)
                count++;
        }

    }
    return count
}
const solution_6_2 = (array: number[][]): number => array.map((data) => data.filter((d) => d < 0).length).reduce((sum, d) => sum + d, 0)

console.log(solution_6_1([[4, 3, -1], [2, -1, -2, -3], [3, 4, 5]]));
