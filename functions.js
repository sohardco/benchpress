var trainingWeight = [];
var concatDays = [];

function calculateWeights(weight,concatDays){

    for (var count=0; count < Object.keys(concatDays).length; count++) {
        var ratio = Object.values(concatDays)[count];
        var fractionalWeight = (weight * ratio[count])/2.5;
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

export {calculateWeights, concatTrainingRatios};
