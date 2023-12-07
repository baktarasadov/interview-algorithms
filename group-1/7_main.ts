// find repeating numbers

const findRepeatingNumbers_1 = (array: number[]): number[] => {
    let result: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = 0; j < array.length; j++)
            if ((i !== j) && (array[j] == array[i])) {
                result.push(array[i]);
            }
    }
    return [...new Set([...result])]
}

const findRepeatingNumbers_2 = (array: number[]) => [...new Set([...array.filter((e, f) => array.find(i => f != i && e == array[i]))])]