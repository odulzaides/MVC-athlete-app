'use strict'

////  Model  //// 

// Athlete Object
const Athlete = function (name, age, username) {
    this.username = username;
    this.name = name;
    this.age = age;
    this.testResults = [];
    this.lthr = [];
    // TODO: Add new Athlete to array
}

// Athlete methods
Athlete.prototype = {
    getName: function () {
        console.log(this.name);
    },
    getAge: function () {
        console.log(this.age);
    },
    setZones: function () {
        let testResults = this.testResults;
        let lthrArr = [.81, .81, .89, .90, .93, .94, .99, 1.00, 1.02, 1.03, 1.06, 1.06];
        let ftpArr = [.55, .56, .75, .76, .85, .95, .96, 1.05, 1.06, 1.20, 1.21, 1.50, 1.51];
        let calculateZones = function (arr, index) {
            let zones = arr.map(function (item) {
                return Math.floor(item * testResults[0].testResult[index]);
            });
            return zones;
        }
        this.lthrZones = calculateZones( lthrArr, 2);
        this.powerZones = calculateZones(ftpArr, 1);
    },
    // Set ftp and lthr into array
    setMetrics: function (ftp, lthr) {
        let date = new Date().toLocaleDateString();
        let metrics = {};
        metrics.testResult = [date, ftp, lthr];
        this.testResults.push(metrics);
        // console.log(this.testResults);

    }

}

// All Athletes
const AthleteDatabase = function (athlete) {
    return function () {
        let athletes = [];
        athletes.push(athlete);
    }
    // console.log(athletes);   
}

// Test code
let oscar = new Athlete("Oscar J Dulzaides", 56, "odulzaides");
let thomas = new Athlete("Thomas Corea", 56, "thomasc");
// oscar.setMetrics(230, 152);
// oscar.setMetrics(230, 152);
// oscar.setMetrics(230, 152);
// oscar.setZones();
// console.log(oscar.lthrZones); 
// console.log(oscar.powerZones);  

/////  Controller ////
const SetAthtleteData = function () {
    // TODO: Add new Athlete to array
    return;
}

///////  View /////
// Make an object
// 
const ZoneTable = function () {

}