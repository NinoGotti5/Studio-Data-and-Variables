// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');
let astronautCount = input.question("Number of astronauts: ");
// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttlemasskg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttlemasskg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";
let divider = '-------------------------------------';


// Write code to generate the LC04 report here:

//title
console.log(divider);
console.log('> LC04 - LAUNCH CHECKLIST');
console.log(divider);


//date
console.log('Date: ' + date + '\nTime: ' + time);
console.log('\n')


//info
console.log(divider);
console.log('> ASTRONAUT INFO');
console.log(divider);
console.log('* count: ' + astronautCount + '\n* status: ' + astronautStatus);
console.log('\n');

//fuel 
console.log(divider);
console.log('> FUEL DATA');
console.log(divider);
console.log('* Fuel temp celsius: ' + fuelTempCelsius + '\n* Fuel level: ' + fuelLevel + '%');
console.log('\n');
console.log(divider);

//mass data
console.log('> MASS DATA');
console.log(divider);
console.log('* Crew mass: ' + crewMassKg + ' kg');
console.log('* Fuel mass: ' + fuelMassKg + ' kg');
console.log('* Shuttle mass: ' + shuttlemasskg + ' kg');
console.log('* Total mass: ' + totalMassKg + ' kg');
console.log('\n');
console.log(divider);

//flight 
console.log('> FLIGHT PLAN');
console.log(divider);
console.log('* weather: ' + weatherStatus);
console.log('\n');
console.log(divider);
console.log('> OVERALL STATUS');
console.log(divider);
console.log('* Clear for takeoff: YES');

// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.