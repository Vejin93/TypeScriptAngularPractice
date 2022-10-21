import { BasketballCoach } from './BasketballCoach';
import { FootballCoach } from './FootballCoach';
import { Coach } from './Coach';

let myBasketballCoach = new BasketballCoach();
let myFootballCoach = new FootballCoach();

// declaration an array for coaches... array is empty
let theCoaches: Coach[] = [];

// add coaches to the array
theCoaches.push(myBasketballCoach);
theCoaches.push(myFootballCoach);

for (let currentCoach of theCoaches){
    console.log(currentCoach.getDailyWorkout());
}