const board = document.getElementById('board');
const resetBtn = document.getElementById('restartButton');
const winMsg = document.getElementById('winningMessageText');

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let grid = new Array(9);
let count = 0;
let curr = 'X';

board.addEventListener('click', handleClick);

resetBtn.addEventListener('click', () => {
  restart();
});

function endGame() {
  board.removeEventListener('click', handleClick);
}

function handleClick(event) {
  const div = event.target;

  div.innerHTML = `<span>${curr}</span>`;
  div.classList.add(curr);
  let cellId = div.dataset.cellIndex;
  grid[cellId] = curr;
  curr = curr === 'X' ? 'O' : 'X';
  count++;
  let res = checkWinner();
  if (res) {
    winMsg.innerHTML = `Winner is ${res} !`;
    endGame();
  }
  if (count === 9) {
    winMsg.innerHTML = 'Match is Draw !';
  }
}

function checkWinner() {
  for (let i of winCases) {
    let el = i[0];
    if (grid[el] && grid[el] === grid[i[1]] && grid[el] === grid[i[2]]) {
      return grid[el];
    }
  }
  return false;
}

function restart() {
  document.location.reload();
}
