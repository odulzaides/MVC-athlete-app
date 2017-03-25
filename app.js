$(function(){

// Model
const model = {
    // setup local storage
    init: function () {
        if (!localStorage.athletes) {
            console.log("No database");
            localStorage.athletes = JSON.stringify([]);
        }
    },
    // New Athlete object
    Athlete: function (name, age, weight, username, pwd, email) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.testResults = [];
    },
    // Add Athletes to the local database
     add: function (obj) {
        var data = JSON.parse(localStorage.athletes);
         console.log("Model add called ", data);
        data.push(obj);
        localStorage.athletes = JSON.stringify(data);
        console.log(data);
    },
    // get Athlete names
    getAthletes: function () {
        var data = JSON.parse(localStorage.athletes);
    }
}
// Athlete object methods
model.Athlete.prototype = {
    // add test testResults
    addTestResults: function(obj,result){
        obj.testResults.push(result);
        console.log("Added new Test Results ", obj.testResults);
    }
}


// Controller
const controller = {
    addAthlete: function(obj){
        model.add(obj);
    },
    addTestResults: function(obj, result){
        model.Athlete.prototype.addTestResults(obj, result);
    },
    init: function(){
        console.log("Controller init called");
        model.init();
    }

}



// View
const view = {

}

controller.init();

// Instatiate and add Athletes 
var oscar = new model.Athlete("Oscar J Dulzaides", 56, 178, "odulzaides", "password", "o@g.com");
var thomas = new model.Athlete("Thomas Corea", 26, 143, "tcorrea", "password", "t@g.com");

// add Atheletes to localStorage
controller.addAthlete(oscar);
controller.addAthlete(thomas);

//  Add Test Results to Athletes
// Oscar
var date = new Date().toLocaleDateString();
var test = {};
test[date] = [230, 152];
controller.addTestResults(oscar, test);

var date = new Date().toLocaleDateString();
var test = {};
test[date] = [22230, 12252];
controller.addTestResults(oscar, test);

// Thomas
// var date = new Date().toLocaleDateString();
// var test = {};
// test[date] = [22230, 12252];
// controller.addTestResults(thomas, test);

// var date = new Date().toLocaleDateString();
// var test = {};
// test[date] = [222, 12];
// controller.addTestResults(thomas, test);
});