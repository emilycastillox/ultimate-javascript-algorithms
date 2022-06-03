/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//iterative approach

const vowels = ['a','e','i','o','u']

function vowelsCounter(text) {
    let counter = 0; //initialize counter

    //loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter

}



module.exports = vowelsCounter;
