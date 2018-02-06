//Creates table based on object served from fillTable function
function createTableFromObj(tableObj) {
    var body = document.body;
    var tbl = document.createElement("table");
    tbl.className = "table js-table hidden";
    //tbl.id = tableObj[0];
    //var th = tbl.createTHead();
    var tdCount = 3;
    var trCount = tableObj[1].length;

    for (var i = 0; i < trCount; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < tdCount; j++) {
            var td = tr.insertCell();
            if (j == 0) {
                td.appendChild(document.createTextNode('Cell1'));
            }else if (j == 1) {
                td.appendChild(document.createTextNode('Cell2'));
            }else {
                td.appendChild(document.createTextNode('Cell3'));
            }
        }
    }
    //body.removeChild(tbl);
    body.appendChild(tbl);
}

//Splits object to create separate tables for every training day
export function fillTable(calculatedBarbellWeights) {
    const iterations = Object.keys(calculatedBarbellWeights).length;

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
