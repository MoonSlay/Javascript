// Importing prompt-sync for user input
const prompt = require('prompt-sync')();

// Function to check if a word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase and remove any spaces
    let cleanedWord = word.toLowerCase().replace(/\s+/g, '');
    
    // Reverse the cleaned word
    let reversedWord = cleanedWord.split('').reverse().join('');
    
    // Check if the word is the same forwards and backwards
    return cleanedWord === reversedWord;
}

// Function to get user input and display the result
function checkPalindrome() {
    // Prompting the user to enter a word
    let word = prompt("Enter the word you want to check: ");
    
    // Validate the input for non-empty word
    if (!word) {
        console.log("Invalid input. Please enter a valid word.");
        return;
    }

    // Check if the word is a palindrome and display the result
    console.log("\nResult:");
    if (isPalindrome(word)) {
        console.log(`The word "${word}" is a palindrome!`);
    } else {
        console.log("The word you've entered is not a palindrome!");
    }
}

// Call the checkPalindrome function to execute the program
checkPalindrome();
