var trainingWeight = [];

function calculateWeights(weight,ratio){
    for (var count=0; count < ratio.length; count++) {
        var fractionalWeight = (weight * ratio[count])/2.5;
        trainingWeight[count] = Math.round(fractionalWeight)*2.5;
    }
    return trainingWeight;
}
