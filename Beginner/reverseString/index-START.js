/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    return text.split("").reverse().join("")
}

//using spread operator in place of split - spreads characters into string of array elements

function reverseString(text) {
    return [...text].reverse().join('')
}

//for loop way: runs through string recieved and appends each character to another variable in reverse order

function reverseString(text) {
    let result = ''

    for (let i = text.length -1; i >= 0; i--){
        result += text[i]
    }
    return result
}

// for of loop: used to execute certain piece of code for each distinct item(propety) of an iterable object

// runs through each character in the text recieved and append to beginning of a new variable, which we return as a reversed string

function reverseString(text){
    let result = "";

    for(let char of text){
        result = char + result
    }
    return result
}

// recursive way: reduce the problem into smaller instances of the same problem until it is completely solved.

// uses .substr() method to return portion of text recieved. Two params, one starting index and number of chars after (optional)

function reverseString(text) {
    if(text === ""){ // terminal case - don't want endless loop
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

//reduce method: execute a function on every member of an array until it results in a single output value. It receives the function to be executed and the initial value of the accumulator as arguments. The accumulator serves as a holder for the value returned in the last execution of the callback.

function reverseString(text) {
    return text.split('').reduce((acc,char) => char + acc, '')
}

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}


module.exports = reverseString