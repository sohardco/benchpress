
//Creates table based on object served from fillTable function
function createTableFromObj(tableObj) {
    const getWorkoutDiv = document.querySelector('.js-workouts');
    const tbl = document.createElement('table');

    tbl.className = 'table js-table hidden';

    const tdCount = 3;
    const trCount = tableObj[1].length;

    for (var i = 0; i < trCount; i++) {
        var weight = tableObj[1][i];
        var tr = tbl.insertRow();
        var period = "Period " + (i + 1);

        for (var j = 0; j < tdCount; j++) {
            var td = tr.insertCell();
            if (j == 0) {
                td.textContent = period;
            } else if (j == 1) {
                td.textContent = weight;
            } else {
                td.textContent = ;
            }
        }
    }
    //body.removeChild(tbl);
    getWorkoutDiv.appendChild(tbl);
}

//Splits object to create separate tables for every training day
export function fillTable(calculatedBarbellWeights) {
    const iterations = Object.keys(calculatedBarbellWeights).length;

    for (var i = 0; i < iterations ; i++) {
        var tableData = Object.entries(calculatedBarbellWeights)[i];
        createTableFromObj(tableData);
    }
};
