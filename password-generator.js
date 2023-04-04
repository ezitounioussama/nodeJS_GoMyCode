// Import the generate-password library
const generatePassword = require("generate-password");

// Define a function to generate a random password
function generateRandomPassword() {
  // Generate a password with a length of 10 characters and including numbers
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
  });

  // Log the generated password to the console
  console.log(`Your randomly generated password is: ${password}`);
}

// Call the function to generate a random password
generateRandomPassword();
