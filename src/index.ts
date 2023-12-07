const star = (): string => {
    let result = ''
    for (let i: number = 5; i >= 0; i--) {
        for (let j: number = 0; j <= i; j++) {
            result += " "

        }
        for (let k: number = 0; k < 1; k++) {
            result += "*"
        }
        result += "\n"
    }
    return result
}

console.log(star());