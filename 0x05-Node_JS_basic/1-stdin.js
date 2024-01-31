// Display a welcome message to the user.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input data from the user.
process.stdin.on('data', (data) => {
  // Output the user's name based on the provided input data.
  process.stdout.write(`Your name is: ${data}`);
});

// Listen for the end of the input stream.
process.stdin.on('end', () => {
  // Display a closing message when the input stream ends.
  process.stdout.write('This important software is now closing\n');
});
