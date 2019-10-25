console.log('hello people');

// //---------------------------cached element references-----------------------------------------------
var board;
const player1 = 'O';
const player2 = 'X';
// const winnginNums = [
//     [0, 1, 2]
//     [3, 4, 5]
//     [6, 7, 8]
//     [0, 3, 6]
//     [1, 4, 7]
//     [2, 5, 8]
//     [0, 4, 8]
//     [2, 4, 6]
// ];
// const cells = document.querySelectorAll('.cell')

// // -------------------------------event listeners -------------------------------------------

const boxes = document.querySelector('table').addEventListener('click', (evt) => {
    console.log(evt.target);
});
// const boxes = document.querySelectorAll('td')
// console.log(boxes)

// //------------------------------functions------------------------------------------------------

// function addCellSelected(x) {
//     console.log(x.target.id)
// }