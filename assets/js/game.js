var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// string data type
var enemyName = "Roborto"; 
// number data types
var enemyHealth = 50;
var enemyAttack = 12;

// Welcome players to the game  
function fight() {
    window.alert("Welcome to Robot Gladiators!");
};
// execute function
fight();

// If player chooses to fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// Remove enemys health by substracting the amound set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
// log in console to know it worked 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
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
    window.alert(playerName + " has chosen to skip the fight!");
}
 else {
    window.alert("You need to chose a valid option. Try again");
}
