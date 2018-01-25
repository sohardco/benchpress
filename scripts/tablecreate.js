//Creates table based on object served from fillTable function
function createTableFromObj(tableObj) {
    var body = document.body;
    var tbl = document.createElement("table");
    tbl.className = "hide";
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

//Splits object to create separate tables for every training day
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
