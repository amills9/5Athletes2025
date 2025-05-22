"use strict";

/**
 * @author Andrew Mills <andrew.mills56@studytafensw.edu.au>
 * 
 * @version 1.0
 * 
 * @description This script manages a list of athletes, allowing you to add and remove athletes
 * based on their name and height. It uses two arrays to store athlete names and heights.
 * 
 * The script performs the following tasks:
 * - Adds an athlete's name and height to the arrays if there's space.
 * - Removes an athlete from the arrays by their name.
 * - Checks for space when adding an athlete and prevents adding when the arrays are full.
 * 
 * @summary Athlete array Script - Adds and removes athletes based on name and height.
 * 
 * @module TaskThree.js
 * 
 * @function addAthlete
 * @function removeAthlete
 * 
 * @returns {string} Returns a message indicating whether the athlete was added or removed successfully, 
 * or if the array is full or the athlete is not found.
 */

// Declare variables
let athleteNames = new Array(5);
let athleteHeights = new Array(5);
const MAX_ATHLETES = 5;

/**
 * Adds an athlete to the arrays of names and heights.
 * 
 * @param {string} name - The name of the athlete to add.
 * @param {number} height - The height of the athlete in centimeters.
 * @returns {string} Returns a message indicating the result of the operation:
 *                   - "Athlete added" if the athlete is successfully added.
 *                   - "Array is full" if no space is available in the arrays.
 */

// Function to add an athlete to the arrays
function addAthlete(name, height) {

    // Check if the name and height are valid
    if (!name || !height) {
        alert("Please enter both name and height");
        return;
    }
    
    // Check if there's space
    for (let i = 0; i < MAX_ATHLETES; i++) {
        if (athleteNames[i] === undefined) {
            athleteNames[i] = name;
            athleteHeights[i] = height;
            console.log("Added athlete: " + name + " with height: " + height + "cm. To array position: " + i);
            
            // Sort the arrays
            sortAthletes();
            return "Athlete added"; //Return after sort or sort funtion unreachable!
        }
    }
    console.log("Array is full");
    return "Array is full";
}

/**
 * Removes an athlete by their name from the arrays.
 * 
 * @param {string} name - The name of the athlete to remove.
 * @returns {string} Returns a message indicating whether the athlete was removed or not found.
 */

// Function to remove an athlete by name
function removeAthlete(name) {
    let index = findAthlete(name);
    if (index > -1) {
        let removeName = athleteNames[index]; // Store name before removing
        athleteNames.splice(index, 1);
        athleteHeights.splice(index, 1);
        console.log(removeName + " has been removed from the array");
        return "removed successfully";
    } else {
        console.log(name + " is not in the array");
        return "Athlete not found";
    }
}

/**
 * Finds an athlete by their name using a binary search.
 * 
 * @param {string} name - The name of the athlete to find.
 * @returns {number} Returns the index of the athlete in the arrays if found, otherwise -1.
 */

// Binary search algorithm to find an athlete by name
function findAthlete(name) {

    // Check if the name is valid
    if (!name) {
        alert("Please enter a name to search for");
        return -1;
    }
    // Ensure arrays are sorted
    sortAthletes();
    let start = 0;
    let end = MAX_ATHLETES - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Compare the middle element
        if (athleteNames[mid] === name) {
            console.log("Athlete found at position: " + mid + " with height: " + athleteHeights[mid] + "cm");
            removeAthlete(name);
            return mid;
            
        }
        
        // Workout which half to search
        if (athleteNames[mid] < name) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        removeAthlete(name);
    }
    
    console.log("Athlete not found");
    return -1;
}

/**
 * Sorts the athlete arrays alphabetically by athlete name.
 * It refills the original arrays with sorted data.
 */

// Sort the athletes arrays alphabetically by name
function sortAthletes() {
    // Create arrays of paired values (name and height)
    let athletes = [];
    
    // Collect all non-undefined athletes
    for (let i = 0; i < MAX_ATHLETES; i++) {
        if (athleteNames[i] !== undefined) {
            athletes.push({
                name: athleteNames[i],
                height: athleteHeights[i]
            });
        }
    }
    
    // Sort athletes by name
    athletes.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    
    // Clear the original arrays
    for (let i = 0; i < MAX_ATHLETES; i++) {
        athleteNames[i] = undefined;
        athleteHeights[i] = undefined;
    }
    
    // Refill the original arrays with sorted data
    for (let i = 0; i < athletes.length; i++) {
        athleteNames[i] = athletes[i].name;
        athleteHeights[i] = athletes[i].height;
    }
}

function addAthleteForm() {
    // Get form data
    let name = document.getElementById("athleteName").value;
    let height = document.getElementById("athleteHeight").value;
    // Add the athlete
    addAthlete(name, height);

}

function findAthleteForm() {
    // Get form data
    let name = document.getElementById("athleteName").value;
    // Find the athlete
    findAthlete(name);
}