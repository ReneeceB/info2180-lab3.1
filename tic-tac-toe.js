document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

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
                return gameState[a];
            }
        }
        return null;
    }

    // Function to reset the game
    function resetGame() {
        gameState.fill(null);
        squares.forEach((square) => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        currentPlayer = "X";
        squares.forEach((s) => (s.style.pointerEvents = 'auto'));
    }

    // Add the click event listener to each square
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    squares.forEach(s => s.style.pointerEvents = 'none');
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Add mouseover and mouseout events for hover effect
        square.addEventListener("mouseover", () => {
            if (!gameState[index]) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // Add click event listener for the New Game button
    newGameButton.addEventListener("click", resetGame);
});
