var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

// string and number data types 
// Array used for enemyNames
var enemyNames = ["Roberto", "Amy Anderoid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames[0]); 
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    } // end of while loop
  }; // end of fight function
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log('Your player is still alive!');
  } else {
    fight();
}
// call fight function with enemy-robot
//     fight(enemyNames[i]);
//   }
// Run fight function to start game 
// For loop including fight function inside 
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
// player array starts at zero but round needs to start at 1 - why we did the 'i + 1' aka 0 + 1
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
// pick new enemy to fight based on the index of enemyName Array
    var pickedEnemyName = enemyNames[i];
// Resent enemyHealth before starting new fight
    enemyHealth = 50;
// Debugger
// for (var i = 0; i < enemyNames.length; i++) {
//     debugger;
// pass the pickedEnemyName variable's value into the fight function where it will assume the balie of the enemyName parameter
    fight(pickedEnemyName);
  } else {
// "LOSE" - Player robot's health is zero or less
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
var enemy1 = "Roberto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";
