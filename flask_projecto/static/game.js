'use strict';

/*Handle functionality of buttons  */

const rules_button = document.getElementById('rules_button');
rules_button.onclick = () => {
    alert("Game starts after selecting the name of the players. Player move around the board throwing a dice, each square will be a different country, then the players will answer questions about that country, that will win or lose them points. Game finishes when the first player reaches to 100 points. Huom! There are also squares that will surprise the player.");
};



function player_name() {
  // Create the form HTML
  const PlayerForms = `
    <form id="query">
        <input type="text" id="nombre-player1" placeholder="Player 1" required>
        <input type="text" id="nombre-player2" placeholder="Player 2" required>
        <button type="submit">Submit Names</button>
    </form>
  `;

  // Insert the forms into the container
  const container = document.getElementById('field_players');
  container.innerHTML = PlayerForms;

  // Add event listener to the form
  const form = document.getElementById("query");
  form.addEventListener("submit", gameOn);
}
async function gameOn(event) {
  event.preventDefault(); // Prevent form submission by default

  const player1 = document.getElementById("nombre-player1").value;
  const player2 = document.getElementById("nombre-player2").value;

  //Player data
  const players = [
    { name: player1, points: 0 }, // Starting points
    { name: player2, points: 0 }
  ];

  // Send data to the backend
  for (const player of players) {
    try {
      await fetch("http://127.0.0.1:5000/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player),
      });
    } catch (error) {
      console.error("Error saving player to the database:", error);
    }
  }

  // Hide the form and show the names in the interface
  const container = document.getElementById("field_players");
  container.style.display = "none";
  container.innerHTML = `
    <p>Player 1: ${player1}</p>
    <p>Player 2: ${player2}</p>
  `;

  alert("Click roll dice to begin");
  const dado = document.getElementById("roll_dice");
  dado.disabled = false;
  const start_button = document.getElementById('start_button');
  start_button.disabled = true;
}




// Add event listener to the start button
const start_game = document.getElementById("start_button");
start_game.addEventListener("click", player_name);





