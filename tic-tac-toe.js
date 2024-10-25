document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    let currentPlayer = "X"; // Start with player X

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (square.textContent === "") { // Only allow clicking on empty squares
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Toggle between X and O for the next turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
