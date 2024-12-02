const readlineSync = require('readline-sync');

function speedDetector() {
    const speed = parseInt(readlineSync.question("Enter the speed of the car (km/h): "));
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

speedDetector();
