import { Coach } from './Coach';

export class BasketballCoach implements Coach {
    
    getDailyWorkout(): string {
        return "Practice your shot for 3 points! Made 500 shots!";
    }

}