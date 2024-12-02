const readlineSync = require('readline-sync');

function gradeGenerator() {
    const marks = parseInt(readlineSync.question("Enter student marks (0-100): "));
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    } else if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

gradeGenerator();