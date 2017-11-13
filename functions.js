var trainingWeight = [];
var concatDays = [];
var eleventhDay = 11;
var lastDay = 12;
var offGrid = 1;

function calculateWeights(weight,ratio){
    for (var count=0; count < ratio.length; count++) {
        var fractionalWeight = (weight * ratio[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}

function concatTrainingRatios(scaleObj){
    for (var i = 1; i < (Object.values(scaleObj).length); i++) {
        if (i === eleventhDay){
            concatDays[i - offGrid] = Object.values(scaleObj)[i];
        }else if (i === lastDay) {
            concatDays[i - offGrid] = Object.values(scaleObj)[i];
        }else{
            concatDays[i - offGrid] = Object.values(scaleObj)[0].concat(Object.values(scaleObj)[i]);
        }

    }
    return concatDays;
}
