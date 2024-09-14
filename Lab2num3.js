// Importing prompt-sync for user input
const prompt = require('prompt-sync')();

// Function to check if the input is a number
function isNumber(value) {
    return !isNaN(value) && isFinite(value);
}

// Function to check if a number is odd or even and print the result
function checkNumber() {
    // Prompting the user to enter a number
    let input = prompt("Enter the number you want to check: ");

    // Convert input to a number
    let number = parseFloat(input);

    // Check if the input is a valid number
    if (!isNumber(number)) {
        console.log("Jollibee");
        return;
    }

    // Check if the number is odd or even
    if (number % 2 === 0) {
        console.log(`\nResult:\n${number} -> Jolly`);
    } else {
        console.log(`\nResult:\n${number} -> Bee`);
    }
}

// Call the checkNumber function to execute the program
checkNumber();
