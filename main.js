const functions = require('./functions');

var workoutDays = 12;
var initialBarbellweight =  document.getElementById('inputWeight');
var defaultWeightRatio = [0.3, 0.45, 0.6, 0.7, 0.8, 0.84, 0.88, 0.92, 0.96];
var lastWorkoutDayRatio =[0.36, 0.54, 0.68, 0.76, 0.84, 0.92, 1.0, 1.0, 1.0, 1.0];

//Доп. коеффициенты для формирования полного колличества весов для тренировки
var additionalRatios = [0.8, 0.84, 0.86, 0.88, 0.9, 0.92];



for (workoutDay = 0; i < wholeWorkout; i++){
    switch (workoutDay) {
        case "1":
            var secondDayWorkoutRatio = defaultWeightRatio.concat(additionalRatios.slice(0,2).reverse());
            break;
        case "2":
            var thirdDayWorkoutRatio = defaultWeightRatio.slice(0, -2).concat(additionalRatios.slice(0,2).reverse());
            break;
        case "3":
            var fourthDayWorkoutRatio = defaultWeightRatio.slice(0, -1).concat(additionalRatios.slice(0,2).reverse());
            break;
        case "4":
            var fourthDayWorkoutRatio = defaultWeightRatio.slice(0, -1).concat(additionalRatios.slice(0,2).reverse());
            break;
        default:
            var firstDayWorkoutRatio = defaultWeightRatio.slice(0, -2).concat(additionalRatios.slice(0,2).reverse());
    }

}

functions.calculateWeights(initialBarbellweight,weightRatio);
