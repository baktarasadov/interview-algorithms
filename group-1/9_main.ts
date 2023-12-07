// Reverse word
const reverseString = (word: string): string => {
    let splitWord: string[] = word.split('');
    let reverseArray: string[] = []
    for (let i: number = splitWord.length - 1; i >= 0; i--) {
        reverseArray.push(splitWord[i])

    }
    return reverseArray.join('');
}
const reverseString_2 = (word: string): string => word.split('').reverse().join('');

console.log(reverseString("Salam Machine Learning"), reverseString_2("Salam Machine Learning"));