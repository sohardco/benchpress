var trainingWeight = [];
var concatDays = [];

function calculateWeights(weight,ratio){
    for (var count=0; count < ratio.length; count++) {
        var fractionalWeight = (weight * ratio[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}

function concatTrainingRatios(scaleObj){
    for (var i = 1; i < (values(scaleObj).length - 1); i++) {
        concatDays[i - 1] = values(scaleObj)[0].concat(values(scaleObj)[i]);
    }
    return concatDays;
}
