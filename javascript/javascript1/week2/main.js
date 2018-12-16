//Step 1: Recap/Read 
//Step 2: Warmup part 1: freeCodeCamp username :  johbaguio
//Step 3 : Warmup Part 2
console.log('=== Step 3: Warmup Part 2 ===');

function emptyObject (){
    let showSched = {};
    showSched.time = 12;
    return showSched;
}

let timeObject =  emptyObject();
console.log(timeObject);

// Another warmup exercise in Step 3
console.log('=== Another WarmUp exercise in Step 3 ===');

let sampleArray = [{'color':'green'},{'color':'pink'},{'color':'orange'}];

function arrayWithObjects (color1, color2, color3){
  sampleArray[0].color = color1;
  sampleArray[1].color = color2;
  sampleArray[2].color = color3;
  return sampleArray;
}

let colorObjects = arrayWithObjects('red', 'blue', 'yellow');
console.log(colorObjects);

//For every object in the array log out the color of the object
for(let i = 0; i < sampleArray.length ; i++){
    console.log(sampleArray[i].color);
} 

// Number 8 in Step 3
console.log('=== Number 8 in Step 3 ===');
console.log('===== Using loop =====');

let dayToday = 'Sunday';
let daysOfTheWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let daysToMeet = 9;

for(let y = 0 ; y < daysOfTheWeek.length ; y++){
    if( dayToday === daysOfTheWeek[y]){
        let indexOfDayToday = y;
        let meetingDay = (indexOfDayToday + daysToMeet) % 7;
    
     // console.log('Today is : ' + dayToday + '\nHow many days to meet : ' + daysToMeet + '\nWe are meeting on : ' + daysOfTheWeek[meetingDay]);
        console.log('Today is: ' + dayToday);
        console.log('How many days to meet: ' + daysToMeet);
        console.log('We are meeting on: ' + daysOfTheWeek[meetingDay]);
    }
}

console.log('===== Without loop =====');

let meetingDay = daysToMeet % daysOfTheWeek.length;

console.log('Today is: ' + dayToday);
console.log('How many days to meet: ' + daysToMeet);
console.log('We are meeting on: ' + daysOfTheWeek[meetingDay]);



// Step 3: Smart-ease => NOnoN0nOYes (Note taking app)
// Save a note
console.log('=== Step 3: Smart-ease (SAVE A NOTE) ===');

let notes = [];

function addNote (note, noteId){
    notes.push({note,noteId});
}

addNote("My first note", 1234);
addNote("My second note", 5678);
addNote("My third note", 1122);

console.log(notes);


//Get a note
console.log('=== Step 3: Smart-ease (GET A NOTE) ===');

function getNoteFromId (id){
    let recordFound = false;
    for(let i = 0; i < notes.length; i++){
         if (id === notes[i].noteId){
         console.log(notes[i]);
         recordFound = true;
         break;
         } 
     }
    if (recordFound === false){
        console.log("Note id " + id + " doesn't exist.")
    }     
  }
  getNoteFromId(5678);


//Read all notes
console.log('== Step 3: Smart-ease (READ ALL NOTES) ==');

function showAllNotes(){
    for(let x = 0; x < notes.length; x++){
        console.log('The note with id: ' + notes[x].noteId + ', has the following text: ' + notes[x].note + '.');
    }
}
showAllNotes();


//CactusIO-interactive (Smart phone usage app)
// Adding an activity
console.log('=== Step 3: CactusIO-interactive (ADDING AN ACTIVITY) ===');

let activities = [];

function addActivity(date, activity, duration){
    activities.push({date, activity, duration});
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Facebook', 20);
addActivity('23/7-18', 'Instagram', 25); 
console.log(activities); 

//Show my status
console.log('=== Step 3: SHOW MY STATUS ===');

let totalMins = 0;
let numOfAct = activities.length;

function showStatus(activities){
    if (activities.length === 0 ){
        console.log("Add some activities before calling showStatus.");
    } else {
        for (let y = 0; y < numOfAct ; y++){
            totalMins = totalMins + activities[y].duration;
        }
    console.log('You have added ' + numOfAct + ' activities. They amount to ' + totalMins + ' minutes of usage.');
    }
}
showStatus(activities);

//Usage limit
console.log('==== Step 3: USAGE LIMIT ====');

let limit = 0;

function setUsageLimit(limit){
    if(totalMins < limit){
        console.log("You have not reached your usage limit yet. Enjoy surfing the internet!");
    } else{
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    console.log('Usage limit: ' + limit);
    console.log('Minutes used: ' + totalMins);
}
setUsageLimit(60);

/* to add the date today automatically
let today  = new Date();
console.log(today.toLocaleDateString("en-US")); 
*/