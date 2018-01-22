var calculatedBarbellWeights = {};
var concatDays = [];

//concatDays array of arrays

function calculateWeights(weight, concatDays) {
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


function createTableFromObj(tableObj) {
    var body = document.body;
    var tbl = document.createElement("table");
    tbl.className = tableObj[0];
    var th = tbl.createTHead();
    var tdCount = 3;
    var trCount = tableObj[1].length;

    for (var i = 0; i < trCount; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < tdCount; j++) {
            var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
            }
        }
    body.appendChild(tbl);
}

function fillTable(calculatedBarbellWeights) {
    var iterations = Object.keys(calculatedBarbellWeights).length
    for (var i = 0; i < iterations ; i++) {
        var tableData = Object.entries(calculatedBarbellWeights)[i];
        createTableFromObj(tableData);


    }
};

// for (var i = 0; i < calculatedBarbellWeights.length; i++) {
//     var fillingArray = calculatedBarbellWeights[i];
// for (var i = 0; i < fillingArray.length; i++) {
//     document.getElementsByName("weight")[i].innerHTML = fillingArray[i];
//     }
// }
//export {calculateWeights, concatTrainingRatios};
