// *
// **
// ***
// ****
// *****

const starRight_1 = (): string => {
    let result = ''
    for (let i: number = 0; i < 5; i++) {
        for (let j: number = 0; j <= i; j++) {
            result += "*"

        }
        result += "\n"


    }
    return result
}

const starRight_2 = (): string => {
    let result = ''
    for (let i: number = 0; i < 5; i++) {
        result += "*".repeat(i)
        result += "\n"
    }
    return result
}
console.log(starRight_2());

