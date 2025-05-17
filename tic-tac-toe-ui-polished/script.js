const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
const resetButton = document.querySelector('.reset');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = 'X';
let gameActive = true;
let moves = 0;

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    moves++;

    if (checkWinner()) {
        status.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (moves === 9) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    return winningCombos.some(combination => {
        if (
            cells[combination[0]].textContent !== '' &&
            cells[combination[0]].textContent === cells[combination[1]].textContent &&
            cells[combination[1]].textContent === cells[combination[2]].textContent
        ) {
            combination.forEach(index => {
                cells[index].classList.add('winner');
            });
            return true;
        }
        return false;
    });
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });
    currentPlayer = 'X';
    gameActive = true;
    moves = 0;
    status.textContent = `Player ${currentPlayer}'s turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);


