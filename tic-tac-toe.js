document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square"); // Select all square divs
    let currentPlayer = "X"; // Start with player X
    const gameState = Array(9).fill(null); // Initialize game state array
    const statusDiv = document.getElementById("status"); // Get status div

    // Winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    // Function to check for a winner
    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Return winner (X or O)
            }
        }
        return null; // No winner
    }

    // Add the click event listener to each square
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (!gameState[index]) {
                gameState[index] = currentPlayer; // Update game state
                square.textContent = currentPlayer; // Set the text to X or O
                square.classList.add(currentPlayer); // Add class for styling

                // Check for a winner
                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`; // Update status
                    statusDiv.classList.add("you-won"); // Add class to status div
                    squares.forEach(s => s.style.pointerEvents = 'none'); // Disable further clicks
                } else {
                    // Switch player
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Add mouseover and mouseout events for hover effect
        square.addEventListener("mouseover", () => {
            if (!gameState[index]) {
                square.classList.add("hover"); // Add hover class
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover"); // Remove hover class
        });
    });

    // Reset game on New Game button click
    const newGameButton = document.querySelector(".btn");
    newGameButton.addEventListener("click", () => {
        gameState.fill(null); // Reset game state
        squares.forEach(square => {
            square.textContent = ""; // Clear square
            square.classList.remove("X", "O"); // Remove classes
            square.style.pointerEvents = 'auto'; // Enable clicks
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O."; // Reset status
        statusDiv.classList.remove("you-won"); // Remove winner class
        currentPlayer = "X"; // Reset to player X
    });
});
