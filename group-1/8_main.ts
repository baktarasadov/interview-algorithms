// Finding the longest word in a given string


const findLongestWord_1 = (word: string): string => {
    let splitWord: string[] = word.split(' ');
    let maxWord = splitWord[0];
    for (let i: number = 0; i < splitWord.length; i++) {
        if (splitWord[i].length > maxWord.length) {
            maxWord = splitWord[i];
        }
    }
    return maxWord;
}
const findLongestWord_2 = (word: string): string => word.split(" ").sort((a, b) => a.length - b.length)[word.split(" ").length - 1]

console.log(findLongestWord_1("Salam Machine Learning"), findLongestWord_2("Salam Machine Learning"));