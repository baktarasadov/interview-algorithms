// number to hour and minute

const getTime = (number: number): { hour: number, minute: number } => {
    const hour = Math.floor(number / 60);
    const minute = number % 60;
    return { hour, minute }
}

console.log(getTime(170));