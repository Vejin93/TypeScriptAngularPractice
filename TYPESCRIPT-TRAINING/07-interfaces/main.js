"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasketballCoach_1 = require("./BasketballCoach");
var FootballCoach_1 = require("./FootballCoach");
var myBasketballCoach = new BasketballCoach_1.BasketballCoach();
var myFootballCoach = new FootballCoach_1.FootballCoach();
// declaration an array for coaches... array is empty
var theCoaches = [];
// add coaches to the array
theCoaches.push(myBasketballCoach);
theCoaches.push(myFootballCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var currentCoach = theCoaches_1[_i];
    console.log(currentCoach.getDailyWorkout());
}
