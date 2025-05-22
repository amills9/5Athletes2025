"use strict";

// Declare variables
let athleteNames = new Array(5);
let athleteHeights = new Array(5);
const MAX_ATHLETES = 5;

// Function to add an athlete to the arrays
function addAthlete(name, height) {
    // Check if there's space available
    for (let i = 0; i < MAX_ATHLETES; i++) {
        if (athleteNames[i] === undefined) {
            athleteNames[i] = name;
            athleteHeights[i] = height;
            console.log("Added athlete: " + name + " with height: " + height + "cm. To array position: " + i);
            return "Athlete added";
        }
    }
    console.log("Array is full");
    return "Array is full";
}

// Function to remove an athlete by name
function removeAthlete(name) {
    let index = findAthlete(name);
    if (index > -1) {
        let removeName = athleteNames[index]; // Store name of athlete to be removed
        athleteNames.splice(index, 1);
        athleteHeights.splice(index, 1);
        console.log(removeName + " has been removed from the array");
        return "Athlete removed successfully";
    } else {
        console.log(name + " is not in the array");
        return "Athlete not found";
    }
}

// Function to find an athlete by name
function findAthlete(name) {
    for (let i = 0; i < MAX_ATHLETES; i++) {
        if (athleteNames[i] === name) {
            console.log("Athlete found at position: " + i);
            return i;
        }
    }
    console.log("Athlete not found");
    return -1;
}
