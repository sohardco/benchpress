import { concatTrainingRatios, calculateWeights } from './maths.js';
import { fillTable, isTablePresent } from './tablecreate.js';

const calculateBtn = document.querySelector('#calculate');
const headTable = document.querySelector('#headtable');
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const initForm = document.querySelector('#init');

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

function app() {
    var divRemove = isTablePresent();
    if (divRemove === true){
        div.remove();
    }
    const weightInput = document.getElementById('inputWeight');
    const initialBarbellweight = Number(weightInput.value);

    const concatDays = concatTrainingRatios(warmUp, workoutRatios);
    const calculatedBarbellWeights = calculateWeights(initialBarbellweight, concatDays);

    console.log(calculatedBarbellWeights);

    fillTable(calculatedBarbellWeights);

    const showFirstDay = document.querySelector('.js-table');

    headTable.classList.toggle('hidden', false);
    showFirstDay.classList.toggle('hidden', false);
    nextBtn.classList.toggle('hidden', false);
    initForm.classList.toggle('hidden', false);

}




function back() {

}
function forward() {

}
function navigate(event) {
    const step = 1;
    const tables = document.querySelectorAll('.js-table');
    const tablesList = Array.from(tables);
    const currentTableIndex = tablesList.findIndex(element => !element.classList.contains('hidden'),);
    const direction = event.target.name;
    //var nextTableIndex = direction === 'next' ? ++currentTableIndex : --currentTableIndex;
    if (direction === 'next') {
        var nextTableIndex = currentTableIndex + step;
    } else {
        nextTableIndex = currentTableIndex + step;
    }
    // hide current table
    tablesList[currentTableIndex].classList.toggle('hidden', true);

    // show next table
    tablesList[nextTableIndex].classList.toggle('hidden', false);


    // move to separate method
    if (direction === 'next' && nextTableIndex === tablesList.length) {
        nextBtn.classList.toggle('hidden', true);
    } else if (direction === 'previous' && nextTableIndex === 0) {
        prevBtn.classList.toggle('hidden', true);
    };
}

// function navigateBackForward(event) {
//     var navigateCond = event.target;
//     var tables = document.querySelectorAll('.js-table');
//     var tablesList = Array.from(tables);
//
//     function returnDisplayElement(element) {
// 	    return element.classList.contains('hidden');
//     };
//
//     var displayIndex = tablesList.findIndex(returnDisplayElement);
//
//     function nextItem(index){
//         if (index < tablesList.length) {
//             tablesList[displayIndex].classList.toggle('hidden', false);
//             tablesList[displayIndex -= 1].classList.toggle('hidden', true);
//         }
//     };
//
//     function prevItem(index){
//         tablesList[displayIndex].classList.toggle('hidden', false);
//         tablesList[displayIndex += 1].classList.toggle('hidden', true);
//         if (displayIndex == 0) {
//             prevBtn.classList.toggle('hidden', true);
//         }
//     };
//
//
//
//     switch (displayIndex) {
//         case 10:
//             nextBtn.classList.toggle('hidden', true);
//             break;
//         case -1:
//             document.querySelector('.js-table').classList.toggle('hidden', false);
//             break;
//         default:
//             prevBtn.classList.toggle('hidden', false);
//             nextBtn.classList.toggle('hidden', false);
//     }
//     switch (navigateCond.name) {
//         case 'next':
//             nextItem(displayIndex);
//             break;
//         case 'previous':
//             prevItem(displayIndex);
//             break;
//     }
// }

calculate.addEventListener('click', app);
nextBtn.addEventListener('click', navigate);
prevBtn.addEventListener('click', navigate);
//nextBtn.addEventListener('click', toggleNextPage.bind(null, calculatedBarbellWeights));
initForm.addEventListener('submit', (e) => {
    e.preventDefault();
    app();
});
