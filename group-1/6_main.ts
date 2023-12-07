// Finding the largest number

const findLargestNumber_1 = (array: number[]): number => {
    let max: number = array[0];
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] >= max)
            max = array[i]
    }
    return max

}

const findLargestNumber_2 = (array: number[]): number => array.sort((a, b) => a - b)[array.length - 1]

const findLargestNumber_3 = (array: number[]): number => Math.max(...array)

console.log(findLargestNumber_1([1, 2, 3, 8]), findLargestNumber_2([1, 2, 3]), findLargestNumber_3([1, 2, 3]));