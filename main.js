//import { calculateWeights, concatTrainingRatios } from './functions';


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

var trainingWeight = [];
var concatDays = {};

function calculateWeights(weight,ratio){
    for (var count=0; count < Object.values(ratio).length; count++) {
        var transformArray = Object.values(ratio)[count];
        var fractionalWeight = (weight * transformArray[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}

function concatTrainingRatios(warmUp, scaleObj){
    for (var i = 0; i < (Object.values(scaleObj).length); i++) {
        if (Object.keys(scaleObj)[i] === "eleventhDay"){
            concatDays[i] = Object.values(scaleObj)[i];
        }else if (Object.keys(scaleObj)[i] === "lastDay") {
            concatDays[i] = Object.values(scaleObj)[i];
        }else{
            concatDays[i] = warmUp.concat(Object.values(scaleObj)[i]);
        }

    }
    return concatDays;
}

//export {calculateWeights, concatTrainingRatios};
