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
    for (var i = 1; i < (Object.values(scaleObj).length); i++) {
        if (i === 11){
            concatDays[i - 1] = Object.values(scaleObj)[i];
        }else if (i === 12) {
            concatDays[i - 1] = Object.values(scaleObj)[i];
        }else{
            concatDays[i - 1] = Object.values(scaleObj)[0].concat(Object.values(scaleObj)[i]);
        }

    }
    return concatDays;
}
