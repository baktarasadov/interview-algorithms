// factorial Number

interface IResponse {
    result: number;
    array: number[];
}

const factorial = (number: number): IResponse => {
    let result: number = 1;
    let array: number[] = [];
    for (let i: number = 1; i <= number; i++) {
        result *= i
        array.push(result);
    }
    return { result, array };

}

console.log(factorial(5));