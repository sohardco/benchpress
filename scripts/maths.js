function calculateWeights(weight, concatDays) {
    var calculatedBarbellWeights = {};

    for (var count = 0; count < concatDays.length; count++) {
        var trainingWeight = [];
        var ratio = concatDays[count];
        for (var i = 0; i < ratio.length; i++) {
            trainingWeight[i] = ( Math.round( (weight * ratio[i]) / 2.5) * 2.5);
        }
        calculatedBarbellWeights["tableDay" + count] = trainingWeight;
    }
    return calculatedBarbellWeights;
};

function concatTrainingRatios(warmUp, scaleObj) {
    var concatDays = [];
        for (var i = 0; i < (Object.values(scaleObj).length); i++) {
            if (Object.keys(scaleObj)[i] === "eleventhDay") {
                concatDays[i] = Object.values(scaleObj)[i];
            } else if (Object.keys(scaleObj)[i] === "lastDay") {
                concatDays[i] = Object.values(scaleObj)[i];
            } else {
                concatDays[i] = warmUp.concat( Object.values(scaleObj)[i] );
            }
        }
    return concatDays;
};
