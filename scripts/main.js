var calculateBtn = document.getElementById("calculate");
var headTable = document.getElementById("headtable");
var prevBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");
var initForm = document.getElementById("init");

function app() {
    var initialBarbellweight = parseInt(document.getElementById('inputWeight').value);

    concatTrainingRatios(warmUp, workoutRatios);
    calculateWeights(initialBarbellweight, concatDays);
    console.log(calculatedBarbellWeights);
    fillTable(calculatedBarbellWeights);
    var showFirstDay = document.querySelector('.js-table');
    headTable.classList.toggle('hidden', false);
    showFirstDay.classList.toggle('hidden', false);
    nextBtn.classList.toggle('hidden', false);
    initForm.classList.toggle('hidden', false);
}

function goToNextPage() {
var nodeTablesRendered = document.querySelectorAll('.js-table');
var arrTablesRendered = Array.prototype.slice.call(nodeTablesRendered);

function returnDisplayElement(element){
	var regCheck = /(hidden)/gi;
	if (!regCheck.test(element.classList.value)){
	return element.classList.value
	}
};

var getDisplayIndex = arrTablesRendered.findIndex(returnDisplayElement);

switch (getDisplayIndex) {
    case 0:
        prevBtn.classList.toggle('hidden', true);
        break;
    case arrTablesRendered.length:
        nextBtn.classList.toggle('hidden', true);
        break;
}
}
// if (getDisplayIndex === 0) {
//     prevBtn.classList.toggle('hidden', true);
// } else if (getDisplayIndex === arrTablesRendered.length) {
//     nextBtn.classList.toggle('hidden', true);
// };



//     var counter = 0;
//     var showNextElem = document.querySelector('.someClass');
//     showNextElem.classList.toggle('hidden', true);
//     showNextElem.className = 'hidden';
//     counter +=1;
//     showNextElem.className = 'show';
//     if(showNextElem === 0){
//         prevBtn.className = 'hidden';
//     }else if(showNextElem === Object.keys(tableObject).length){
//         nextBtn.className = 'hidden';
//     }
// }

var warmUp = [0.3, 0.45, 0.6, 0.7, 0.8, 0.84, 0.88];
var workoutRatios = {
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

calculate.addEventListener('click', app);
nextBtn.addEventListener('click', goToNextPage);
//nextBtn.addEventListener('click', toggleNextPage.bind(null, calculatedBarbellWeights));
//initForm.addEventListener('submit', app);