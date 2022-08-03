// Refactored spinner1.js

const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinner[i]}   `);
  }, i * 200);
}