// input [8,4,6,2,3]=> output=>[4,2,4,2,3]

const solution_5_1 = (array: number[]): number[] => {
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                array[i] = array[i] - array[j];
                break;
            }

        }

    }
    return array
}
const solution_5_2 = (array: number[]): number[] => {
    array.map((e, i) => {
        for (let index: number = i + 1; index < array.length; index++) {
            if (array[i] > array[index]) {
                array[i] = array[i] - array[index];
                break;
            }
        }
    })
    return array
}

