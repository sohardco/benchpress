const functions = require('./functions');

var wholeWorkout = 12;
var initialBarbellweight =  document.getElementById('inputWeight');
const defaultWeightRatios = [0.3, 0.45, 0.6, 0.7, 0.8, 0.84, 0.88, 0.92, 0.96];
const lastWorkoutDayRatios =[0.36, 0.54, 0.68, 0.76, 0.84, 0.92, 1.0, 1.0, 1.0, 1.0];

//Доп. коеффициенты для формирования полного колличества весов для тренировки
const additionalRatios = [0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 1.0];



for (workoutDay = 0; workoutDay < wholeWorkout; workoutDay++){


}

functions.calculateWeights(initialBarbellweight,weightRatio);
