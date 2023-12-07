// calculate the sum of odd numbers in an array


const arraySumOfOdd_1 = (array: number[]): number => {
    let result: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 != 0)
            result += array[i]
    }
    return result

}

const arraySumOfOdd_2 = (array: number[]): number => array.filter((e) => e % 2 != 0).reduce((r, x) => r + x, 0);



console.log(arraySumOfOdd_2([1, 2, 3]));