let sportsOne: string[] = ["Football", "Basketball", "Waterpolo", "Voleyball"];

// for (let i=0; i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }

// //Let's use the simplied for loop

// for (let currentSport of sportsOne){
//     console.log(currentSport);
// }

for (let currentSport of sportsOne){
    if (currentSport=="Basketball"){
        console.log(currentSport + "<< My Favorite!");
    } else{
        console.log(currentSport);
    }
    
}