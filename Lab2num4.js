// Importing prompt-sync for user input
const prompt = require('prompt-sync')();

// Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to generate and display the multiplication table
function generateMultiplicationTable(n) {
    console.log("\nMultiplication Table:");
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += (i * j).toString().padStart(4, ' ');
        }
        console.log(row);
    }
}

// Function to display the factorials of numbers from 1 to n
function displayFactorials(n) {
    console.log("\nFactorials:");
    for (let i = 1; i <= n; i++) {
        console.log(`${i}! = ${factorial(i)}`);
    }
}

// Function to prompt the user and display results
function calculateAndDisplay() {
    // Prompting the user to enter a number
    let input = prompt("Enter the number you want to generate: ");
    let n = parseInt(input);

    // Validate if the input is a positive integer
    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive integer.");
        return;
    }

    console.log("\nResult:");
    // Generate and display the multiplication table
    generateMultiplicationTable(n);

    // Display the factorials
    displayFactorials(n);
}

// Call the calculateAndDisplay function to execute the program
calculateAndDisplay();
