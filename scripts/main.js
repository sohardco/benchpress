import { concatTrainingRatios, calculateWeights } from './maths.js';
import { fillTable } from './tablecreate.js';

const calculateBtn = document.querySelector('#calculate');
const prevBtn = document.querySelector('.btn-previous');
const nextBtn = document.querySelector('.btn-next');
const startForm = document.querySelector('.js-form');
const backBtn = document.querySelector('#back');
const container = document.querySelector('.js-workouts');

//weight ratios and reps counter
const warmUp = [0.3, 0.45, 0.6, 0.7, 0.8, 0.84, 0.88];
const workoutRatios = {
    firstDay:[0.84, 0.8],
    secondDay:[0.92, 0.96, 0.84, 0.8],
    thirdDay:[0.92, 0.84, 0.8],
    fourthDay:[0.92, 0.96, 1, 0.86, 0.8],
    fifthDay:[0.92, 0.86, 0.8],
    sixthDay:[0.92, 0.96, 0.86, 0.8],
    seventhDay:[0.92, 0.96, 1, 0.88, 0.82],
    eightsDay:[0.92, 0.96, 0.88, 0.82],
    ninthDay:[0.92, 0.96, 1, 0.90, 0.82],
    tenthDay:[0.92, 0.96, 1, 0.92, 0.84],
    eleventhDay:[0.3, 0.45, 0.6, 0.7],
    lastDay:[0.36, 0.54, 0.68, 0.76, 0.84, 0.92, 1.0]
};
const warmupReps = ['8','6','6','5','4','3','3'];
const trainingReps = {
    firstDay:['2x4', '2x2'],
    secondDay:['2', '2', '2x5', '2x2'],
    thirdDay:['3', '2x6', '2x3'],
    fourthDay:['2', '1', '1', '2x3', '2x3'],
    fifthDay:['3', '2x4', '3x3'],
    sixthDay:['2', '2', '2x5', '3x3'],
    seventhDay:['2', '2', '1', '2x3', '2x2'],
    eightsDay:['3', '2', '2x4', '2x3'],
    ninthDay:['3', '2', '1', '2x3', '3x3'],
    tenthDay:['3', '2', '1', '2x3', '2x2'],
    eleventhDay:['10', '8', '6', '5'],
    lastDay:['8', '6', '5', '4', '3', '2', '1']
};

function toggleHiddenElements(state, boolean){
    document.querySelector('.js-table').classList.toggle(state, boolean);
    nextBtn.classList.toggle(state, boolean);

};

function app() {
    container.innerHTML = '';

    const weightInput = document.getElementById('weight');
    const initialBarbellweight = Number(weightInput.value);

    const concatDays = concatTrainingRatios(warmUp, workoutRatios);
    const concatReps = concatTrainingRatios(warmupReps, trainingReps);
    const calculatedBarbellWeights = calculateWeights(initialBarbellweight, concatDays);

    console.log(concatReps);
    console.log(calculatedBarbellWeights);

    fillTable(calculatedBarbellWeights, concatReps);
    toggleHiddenElements('hidden', false);


}

function back(currentTableIndex) {
    const step = 1
    var nextTableIndex = currentTableIndex - step;
    return nextTableIndex
}

function forward(currentTableIndex) {
    const step = 1;
    var nextTableIndex = currentTableIndex + step;
    return nextTableIndex
}

function showBtn(nextTableIndex, tablesList, step){
    if (nextTableIndex === 0) {
        prevBtn.classList.toggle('hidden', true);
    } else if (nextTableIndex === (tablesList.length -= step)) {
        nextBtn.classList.toggle('hidden', true);
    } else {
        prevBtn.classList.toggle('hidden', false);
        nextBtn.classList.toggle('hidden', false);
    }
}

function navigate(event) {
    // get navigation data
    const step = 1;
    const tables = document.querySelectorAll('.js-table');
    const tablesList = Array.from(tables);
    const currentTableIndex = tablesList.findIndex(element => !element.classList.contains('hidden'),);
    const direction = event.target.name;
    // var nextTableIndex = direction === 'next' ? ++currentTableIndex : --currentTableIndex;

    // deside where to move
    if (direction === 'next') {
        var nextTableIndex = forward(currentTableIndex);
    } else if (direction === 'previous'){
        var nextTableIndex = back(currentTableIndex);
    }
    // hide current table
    tablesList[currentTableIndex].classList.toggle('hidden', true);

    // show next table
    tablesList[nextTableIndex].classList.toggle('hidden', false);

    // deside what button to show
    showBtn(nextTableIndex, tablesList, step);

    //when nextTableIndex 0 => show only next
    //when nextTableIndex n-1 => show only prev
    //else show both
}

calculateBtn.addEventListener('click', app);
nextBtn.addEventListener('click', navigate);
prevBtn.addEventListener('click', navigate);
//backBtn.addEventListener('click', )
//nextBtn.addEventListener('click', toggleNextPage.bind(null, calculatedBarbellWeights));
startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    app();
});
