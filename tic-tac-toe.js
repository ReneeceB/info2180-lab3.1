document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square"); // Select all square divs
    let currentPlayer = "X"; // Start with player X
    const gameState = Array(9).fill(null); // Initialize game state array

    // Add the click event listener to each square
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (!gameState[index]) {
                gameState[index] = currentPlayer; // Update game state
                square.textContent = currentPlayer; // Set the text to X or O
                square.classList.add(currentPlayer); // Add class for styling

                // Switch player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
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
});
