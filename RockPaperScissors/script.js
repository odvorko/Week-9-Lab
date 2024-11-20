function game() {
    let win = false;
    let button = document.getElementById("button");

    for (let i = 1; i <= 3; i++) {
        if (win) break;

        let playerChoice = prompt("Please choose between Rock, Paper, and Scissors").toLowerCase();

        if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            alert("Invalid input! Please choose Rock, Paper, or Scissors.");
            return;
        }

        let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

        if (playerChoice === computerChoice) {
            alert(`It's a tie! You both chose ${playerChoice}. Try again.`);
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            win = true;
            button.classList.add("hidden");
            document.getElementById("message").innerHTML = `You win! Your ${playerChoice} beats ${computerChoice}.`;

        } else {
            alert(`You lose! Computer's ${computerChoice} beats your ${playerChoice}. Try again.`);
        }
    }

    if (!win) {
        document.getElementById("message").innerHTML = "Game over! Better luck next time.";
    }
}
