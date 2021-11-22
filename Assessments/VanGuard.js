// if i is a multiple of 3 and 5 print FizzBuzz
// if i is a multiple of 3 but not 5 print Fizz
// if i is a multipl eof 5 but not 3 print Buzz
// If i is not a multiple of 3 or 5, print the value of i.
// print a new line after each print statement
function sorting(tickets) {
    let len = tickets.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            if (tickets[j] > tickets[j + 1]) {
                let tmp = tickets[j];
                tickets[j] = tickets[j + 1];
                tickets[j + 1] = tmp;
            }
        }
    }
    let mostOccuring = 0;
    let currentStreak = 0;

    for(let i = 0; i < tickets.length - 1; i++) {
        let sum = tickets[i + 1] - tickets[i];
        if(sum === 1 || sum === 0) {
            currentStreak += 1;
            if(currentStreak > mostOccuring) {
                mostOccuring += 1;
            }
        } else {
            currentStreak = 0;
        }
    }
    return mostOccuring
}

let tickets = [4,4,13,2,3];
console.log(sorting(tickets));