// Checks the equality of characters in a string

const equalityOfCharacter_1 = (word: string): boolean => {
    let x = 0;
    let y = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'x')
            x += 1;
        if (word[i] == 'y')
            y += 1;

    }

    return x != 0 && y != 0 && (x % 2 == 0 && y % 2 == 0);
}

const equalityOfCharacter_2 = (word: string): boolean => word.split('').filter((x) => x == "x").length % 2 == 0 && word.split('y').filter((y) => y == "y").length % 2 == 0

console.log(equalityOfCharacter_2("xoxxoyyloaf"));