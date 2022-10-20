var sportsOne = ["Football", "Basketball", "Waterpolo", "Voleyball"];
// for (let i=0; i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }
// //Let's use the simplied for loop
// for (let currentSport of sportsOne){
//     console.log(currentSport);
// }
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var currentSport = sportsOne_1[_i];
    if (currentSport == "Basketball") {
        console.log(currentSport + "<< My Favorite!");
    }
    else {
        console.log(currentSport);
    }
}
