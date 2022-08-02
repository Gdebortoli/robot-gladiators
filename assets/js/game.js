var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// string data type
var enemyName = "Roborto"; 
// number data types
var enemyHealth = 50;
var enemyAttack = 12;

// alert players the round is starting 
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  // subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable

  enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know it worked 

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
// subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable'

     playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " +playerHealth + " health remaining."
);
// Check Players Health

if (playerHealth <= 0) {
    window.SubtleCrypto(playerName + " has died!");
} 
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
};

fight();
