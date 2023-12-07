// the sum of the numbers of the array

const arraySum_1 = (array: number[]): number => {
    let result: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        result += array[i]
    }
    return result

}

const arraySum_2 = (array: number[]): number => array.reduce((i, f) => i + f, 0);

const array: number[] = [1, 2, 3];

console.log(arraySum_2(array));