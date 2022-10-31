// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const tryAgainButton = document.getElementById('try-again-button');
const resetButton = document.getElementById('reset-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    disableButtons();
    console.log(disableButtons);
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
    disableButtons();
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
    disableButtons();
});

tryAgainButton.addEventListener('click', () => {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    enableButtons();
});

resetButton.addEventListener('click', () => {
    window.location.reload();
});

//disable selection buttons function
function disableButtons() {
    shedButton.disable = true;
    treeButton.disable = true;
    boulderButton.disable = true;
}

//enable selection buttons function
function enableButtons() {
    shedButton.disable = false;
    treeButton.disable = false;
    boulderButton.disable = false;
}

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    // shedContainer.classList.remove('face');
    // treeContainer.classList.remove('face');
    // boulderContainer.classList.remove('face');

    // then increment the guesses
    totalGuesses++;
    totalEl.textContent = totalGuesses;
    // then grab the appropriate container element for the correct guess from the DOM   (need to incorporate the template literals `$ )
    const correctEl = document.getElementById(`${correctSpot}-container`);
    // then add the face class to that element so that the face shows up
    correctEl.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
        winsEl.textContent = correctGuesses;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state) (find incorrect guesses by subtracting correct from total guesses)
    else {
        lossesEl.textContent = totalGuesses - correctGuesses;
    }
}
