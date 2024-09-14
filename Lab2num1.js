// Function to reverse the full name
function reverseName(fullName) {
    return fullName.split('').reverse().join('');
}

// Function to calculate the user's current age
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Function to get user input and display the result
function displayResult() {
    const prompt = require('prompt-sync')(); // Requires 'prompt-sync' package for user input
    
    // Prompting the user to enter their full name and birth year
    let fullName = prompt("Enter your full name: ");
    let birthYear = parseInt(prompt("Enter your birth year: "));

    // Validating the input for non-empty name and valid birth year
    if (!fullName || isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        console.log("Invalid input. Please enter a valid full name and birth year.");
        return;
    }

    // Trim excess spaces from the full name and reverse it
    let trimmedFullName = fullName.trim().replace(/\s+/g, ' ');
    let reversedName = reverseName(trimmedFullName);

    // Calculate the age
    let age = calculateAge(birthYear);


    console.log("\nResult:");
    // Display the formatted result
    console.log(`Your name is ${trimmedFullName} and its reversed version is ${reversedName}. Your age is ${age} years old.`);
}

// Call the displayResult function to execute the program
displayResult();
