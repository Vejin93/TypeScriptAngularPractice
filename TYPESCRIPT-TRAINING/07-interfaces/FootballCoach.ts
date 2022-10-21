import { Coach } from './Coach';

export class FootballCoach implements Coach {
    
    getDailyWorkout(): string {
        return "Pratice your free kick shot!";
    }

}