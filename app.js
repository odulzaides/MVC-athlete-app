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
        var username = obj.username;
        function isExistingUser(user){
            return user.username === username;
        }
        if (data.find(isExistingUser)){ 
            alert("Username already in use.");
            return;
        } else{

        console.log(data.find(isExistingUser));
        data.push(obj);
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
    // add test testResults
    addTestResults: function(obj,result){
        obj.testResults.push(result);
    }
}


// Controller
const controller = {
    init: function(){
        console.log("Controller init called");
        model.init();
        view.init();
    },
    addAthlete: function(obj){
        model.add(obj);
    },
    addTestResults: function(obj, result){
        model.Athlete.prototype.addTestResults(obj, result);
    },
    getTestResults: function() {
        return model.getAthletes();
    },
    getAthletes: function(){
        return model.getAthletes();

    }

}



// View
const view = {
    init: function(){
        this.pCell = $('[data-metric=power]');
        this.hCell = $('[data-metric=lthr]');
        
    }
}

controller.init();
var data = controller.getAthletes();
console.log("Data", data);

// Instatiate and add Athletes 
var oscar = new model.Athlete("Oscar J Dulzaides", 56, 178, "odulzaides", "password", "o@g.com");
var thomas = new model.Athlete("Thomas Corea", 26, 143, "tcorrea", "password", "t@g.com");

// add Atheletes to localStorage
controller.addAthlete(oscar);
controller.addAthlete(thomas);

controller.getTestResults();

//  Add Test Results to Athletes
// Oscar
var date = new Date().toLocaleDateString();
var test = {};
test[date] = [230, 152];
controller.addTestResults(oscar, test);


// Add test results
controller.addTestResults(oscar, test);

var data = controller.getAthletes();
console.log("Data", data);
});