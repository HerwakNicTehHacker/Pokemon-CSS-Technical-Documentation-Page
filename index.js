function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayMessage(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p>${message}</p>`;
}

displayMessage("Welcome to the Battle Sim!");
displayMessage("You will be fighting against the computer.");
let name = prompt("First, enter your name: ");
displayMessage(`Ok then, ${name}, let's get started!`);

let round = 1;
let p1HP = 10;
let cpuHP = 10;

displayMessage("Here are the rules:");
displayMessage(
  `You start with ${p1HP} HP and the computer starts with ${cpuHP} HP.`
);
displayMessage(
  "Each round, you will both attack with a randomly generated power."
);
displayMessage(
  "Whoever's power is greater deals 1 point of damage to the other player."
);
displayMessage("Whoever reaches 0 HP first loses. Good luck!");
displayMessage(`You have ${p1HP} HP and the computer has ${cpuHP} HP`);
displayMessage(`Round ${round} begin!`);
displayMessage("------------------");

while (p1HP > 0 && cpuHP > 0) {
  let p1ATK = getRandomInt(1, 10);
  let cpuATK = getRandomInt(1, 10);

  displayMessage(
    `You attack with ${p1ATK} power and the computer attacks with ${cpuATK} power`
  );

  if (p1ATK > cpuATK) {
    displayMessage(
      "Your attack was more powerful! You deal 1 point of damage to the computer!"
    );
    cpuHP -= 1;
  } else if (cpuATK > p1ATK) {
    displayMessage(
      "The computer's attack was more powerful! You take 1 point of damage!"
    );
    p1HP -= 1;
  } else {
    displayMessage(
      "You both attacked with the same power! The attacks cancelled out! No one takes damage!"
    );
  }

  displayMessage(`You have ${p1HP} HP and the computer has ${cpuHP} HP`);
  round += 1;
  displayMessage(`Round ${round} begin!`);
}

displayMessage("---------------------------------");

if (p1HP <= 0) {
  displayMessage("You lost! Better luck next time!");
} else if (cpuHP <= 0) {
  displayMessage("You won! Congratulations!");
}
