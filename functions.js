var trainingWeight = [];

function calculateWeights(weight,ratio){
    for (var count=0; count < ratio.length; count++) {
        var fractionalWeight = (weight * ratio[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}

function concatTrainingRatios(scaleObj){
    for (var i = 1; i < (scaleObj.values.length - 1); i++) {
        var arr[i - 1] = scaleObj.values[0].concat(scaleObj.values[i]);
    }
}
