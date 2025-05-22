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
 * @summary Athlete Management Script - Adds and removes athletes based on name and height.
 * 
 * @module athleteManagement.js
 * 
 * @function addAthlete
 * @function removeAthlete
 * 
 * @returns {string} Returns a message indicating whether the athlete was added or removed successfully, 
 * or if the array is full or the athlete is not found.
 */



/**
 * Array of athlete names and heights.
 * 
 * @type {string[]} athleteNames - The array holding the names of athletes.
 * @type {number[]} athleteHeights - The array holding the heights of athletes in centimeters.
 */

let athleteNames = new Array(5);
let athleteHeights = new Array(5);
const MAX_ATHLETES = 5;

/**
 * Adds an athlete's name and height to the arrays if there is space.
 * 
 * @param {string} name - The name of the athlete to be added.
 * @param {number} height - The height of the athlete to be added, in centimeters.
 * @returns {string} A message indicating whether the athlete was successfully added or the array is full.
 */

function addAthlete(name, height) {
    // Check if there's space available
    for (let i = 0; i < MAX_ATHLETES; i++) {
        if (athleteNames[i] === undefined) {
            athleteNames[i] = name;
            athleteHeights[i] = height;
            console.log("Added athlete: " + name + " with height: " + height + "cm. To array position: " + i);
            alert("Athlete added");
            return "Athlete added";
        }
    }
    console.log("Array is full");
    alert("Array is full");
    return "Array is full";
}

/**
 * Removes an athlete from the arrays by their name.
 * 
 * @param {string} name - The name of the athlete to be removed.
 * @returns {string} A message indicating whether the athlete was removed or not found.
 */

function removeAthlete(name) {
    let index = findAthlete(name);
    if (index > -1) {
        let removeName = athleteNames[index]; // Store name of athlete to be removed
        athleteNames.splice(index, 1);
        athleteHeights.splice(index, 1);
        console.log(removeName + " has been removed from the array");
        alert(removeName + " has been removed from the array");
        return "Athlete removed successfully";
    } else {
        console.log(name + " is not in the array");
        alert(name + " is not in the array");
        return "Athlete not found";
    }
}
