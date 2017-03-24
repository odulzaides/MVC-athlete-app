'use strict'

// 
const Athlete = function(name, age){
    this.name = name;
    this.age = age;
    this.ftp = [];
    this.lthr = [];
    this.lthrMult = [];
    this.ftpMult = [.55,.56,.75,.76,.85,.95,.96,1.05, 1.06, 1.20, 1.21, 1.50,1.51];
}

Athlete.prototype = {
    getName: function(){
        console.log(this.name);
    },
    getAge: function(){
        console.log(this.age);
    },
    setZones: function(){
        console.log(" Hello setZones");
    },
    setMetrics: function(ftp, lthr){
        let date = new Date().toLocaleDateString();
        let metrics = {};
        metrics.testResults = [date,ftp,lthr];
        console.log(metrics);
        
    }

}
let oscar = new Athlete("Oscar J Dulzaides", 56);
let thomas = new Athlete("Thomas Corea", 56);
oscar.setMetrics(230, 152);

///////  View /////
// Make an object
// 
const ZoneTable = function(){

}