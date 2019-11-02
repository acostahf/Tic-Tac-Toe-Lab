console.log('hello people');

const winnginNums = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const grid = () => Array.from(document.getElementsByClassName('cell'));
const clickFn = (evt) => console.log(evt.target);
const cNumId = (cEl) => Number.parseInt(cEl.id.replace('c', ''));


const evtListener = () => grid().forEach(cEl => cEl.addEventListener('click', clickFn));

console.log(cNumId);






evtListener();