var trainingWeight = [];

function calculateWeights(weight,ratio){
    for (var count=0; count < ratio.length; count++) {
        var fractionalWeight = (weight * ratio[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}

function getDailyRatio(workoutDay){
    switch (workoutDay) {
        case "1":
            var secondDayWorkoutRatio = defaultWeightRatios.concat(defaultWeightRatios.slice(4,7).reverse());
            break;
        case "2":
            var thirdDayWorkoutRatio = defaultWeightRatios.slice(0, -2).concat(defaultWeightRatios.slice(4,7).reverse());
            break;
        case "3":
            var fourthDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[7],additionalRatios[2],additionalRatios[0]);
            break;
        case "4":
            var fifthDayWorkoutRatio = defaultWeightRatios.slice(0, -1).concat(additionalRatios[2],additionalRatios[0]);
            break;
        case "5":
            var sixthDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[2],additionalRatios[0]);
            break;
        case "6":
            var seventhDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[7],additionalRatios[3],additionalRatios[0]);
            break;
        case "7":
            var eightsDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[4],additionalRatios[1]);
            break;
        case "8":
            var ninthDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[7],additionalRatios[5],additionalRatios[1]);
            break;
        case "9":
            var tenthDayWorkoutRatio = defaultWeightRatios.concat(additionalRatios[7],additionalRatios[6],additionalRatios[1]);
            break;
        case "10":
            var eleventhDayWorkoutRatio = defaultWeightRatios.slice(0,4);
            break;
        case "11":
            lastWorkoutDayRatios
            break;
        default:
            var firstDayWorkoutRatio = defaultWeightRatio.slice(0, -2).concat(additionalRatios.slice(0,2).reverse());
    }
}
