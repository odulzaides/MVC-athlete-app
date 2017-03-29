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
        // console.log(obj.username);
        var username = obj.username;
        function isExistingUser(user){
           
            return user.username === username;
        }

        if (!data.find(isExistingUser)){ 
             console.log(obj.username);
        data.push(obj);
        console.log("Added", obj)
            // return;    
        } else {
            alert(`Username ${obj.username} already in use.`);
            return;
        }        
       
        localStorage.athletes = JSON.stringify(data);
    },
    // get Athlete names
    getAthletes: function () {
        return JSON.parse(localStorage.athletes);
    }
}
// Athlete object methods
model.Athlete.prototype = {
    // get local storage Db
    getAthletes: function(){
        return JSON.parse(localStorage.athletes);
    },
    // add test testResults
    addTestResults: function(obj,result){
        console.log("hello ", this.getAthletes());
        // obj.testResults.push(result);
    },
    addTestResults: function(obj){
        var data = this.getAthletes();
        console.log(data);
    },
    getZones: function(obj){
        console.log(obj);
        return obj.testResults[0];
    }
}


// Controller
const controller = {
    init: function(){
        console.log("Controller init called");
        model.init();
        view.init();
    },
    // make new Athlete object
    createAthlete: function (name, age, weight, username, password,email) {
        var obj = username;

        usernameObj =  new model.Athlete(name, age, weight, username, password,email);
        model.add(usernameObj);

    },
    // Add new test results
    addTestResults: function(obj, result){
        model.Athlete.prototype.addTestResults(obj, result);
    },
    getTestResults: function(obj) {
        return model.Athlete.prototype.getZones(obj);
    },
    getAthletes: function(){
        return model.getAthletes();

    }

}



// View
const view = {
    init: function(){
        // Home and test Sections
        this.homeSection = $(".home-page-login");
        this.homeSection.hide();

        // Table cells
        this.table = $(".zone-table");
        this.pCell = $('[data-metric=power]');
        this.hCell = $('[data-metric=lthr]');
    }
}
controller.init();
// console.log(controller.getAthletes());


// Instatiate and add Athletes 
// var oscar = new model.Athlete("Oscar J Dulzaides", 56, 178, "odulzaides", "password", "o@g.com");

// TODO: set up to create object from value of name field
// TODO: add name field to form
// var varA = value
// varA = new obj()
 controller.createAthlete("Oscar J Dulzaides", 56, 178, "odulzaides", "password", "o@g.com");
controller.createAthlete("Thomas J Corea", 56, 178, "tcorea", "password", "o@g.com");
controller.createAthlete("Thomas J Corea", 56, 178, "reggie", "password", "o@g.com");
controller.createAthlete("Thomas J Corea", 56, 178, "reggie", "password", "o@g.com");
// console.log(oscar);
// console.log(thomas);

// controller.addAthlete(thomas);controller.addAthlete(reggie);


// add Atheletes to localStorage
// controller.addAthlete(oscar);
console.log(controller.getAthletes());
//  // Add Test Results to Athletes
// // Oscar
// var date = new Date().toLocaleDateString();
// var test = {};
// test[date] = [230, 152];
// controller.addTestResults(oscar, test);
// // model.Athlete.prototype.getZones(oscar);

// // Add test results
// controller.addTestResults(oscar, test);
// console.log(oscar.testResults);



});