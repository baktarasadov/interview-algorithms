// word first character uppercase


const fristUppercase_1 = (word: string): string => {
    let splitWord: string[] = word.split('');
    splitWord[0] = splitWord[0].toUpperCase()
    return splitWord.join('');
}
const fristUppercase_2 = (word: string): string => word[0].toUpperCase() + word.slice(1);

console.log(fristUppercase_1("salam Machine Learning"), fristUppercase_2("salam Machine Learning"));