// *****
// ****
// ***
// **
// *

const starLeft_1 = (): string => {
    let result = ''
    for (let i: number = 5; i >= 0; i--) {
        for (let j: number = 0; j <= i; j++) {
            result += "*"
        }
        result += "\n"
    }
    return result
}

const starLeft_2 = (): string => {
    let result = ''
    for (let i: number = 5; i >= 0; i--) {
        result += "*".repeat(i)
        result += "\n"
    }
    return result
}
console.log(starLeft_2());