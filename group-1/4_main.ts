// Calculating the sum of Even numbers in an array

const arraySumOfEven_1 = (array: number[]): number => {
    let result: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            result += array[i]
    }
    return result

}

const arraySumOfEven_2 = (array: number[]): number => array.filter((e) => e % 2 == 0).reduce((r, x) => r + x, 0);



console.log(arraySumOfEven_1([1, 2, 3, 8]), arraySumOfEven_2([1, 2, 3]));