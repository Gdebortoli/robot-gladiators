var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// string and number data types 
// Array used for enemyNames
var enemyNames = ["Roberto", "Amy Anderoid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);
console.log(enemyNames[0]); 
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
  }  

// Welcome players to the game and alert them the round is starting
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
// Ask players if they would like to fight or run
 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// If player chooses to fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// Remove enemys health by substracting the amound set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
// log in console to know it worked 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    { window.alert("Welcome to Robot Gladiators!");
};

// Check Enemy's Health

if (enemyHealth <= 0) {
    Window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//Remove players health by subtracting amount in enemyAttack variable
     playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked
console.log(
    enemyName + " attacked" + playerName + ". " + playerName + " now has " +playerHealth + " health remaining."
);

// Check Players Health

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }
  
// if player chooses SKIP
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you would liked to quit?");
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip the fight. Goodbye!");
    playerMoney = playerMoney - 2;
} 
// if no (false) ask question again by runnning fight agian
else {
    fight();
}
// If player did not chose option 1 or 2 in prompt 
}else {
        window.alert("You need to chose a valid option. Try again");
    }
};
// End of Fight Function
// Run fight function to start game 

// fight(); = ON PAUSE - COMMENTED OUT

// Game States
// "WIN" - Player robot has defeated all enemy-robots
var enemy1 = "Roberto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
