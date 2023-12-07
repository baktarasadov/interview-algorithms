// Calculating the average of odd numbers in an array

const arrayAverageOdd_1 = (array: number[]): number => {
    let result: number = 0;
    let count: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            result += array[i]
            count += 1
        }

    }
    return result / count

}

const arrayAverageOdd_2 = (array: number[]): number => array.filter((e) => e % 2 != 0).reduce((r, x) => r + x, 0) / array.filter((e) => e % 2 != 0).length;

console.log(arrayAverageOdd_1([1, 2, 3, 8]), arrayAverageOdd_2([1, 2, 3]));