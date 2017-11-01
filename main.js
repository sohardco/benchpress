const functions = require('./functions');

var initialBarbellweight =  document.getElementById('inputWeight');
var weightRatio = ["0.30","0.45","0.60","0.70","0.80","0.84","0.88","0.84","0.80"];

functions.calculateWeights(initialBarbellweight,weightRatio)
