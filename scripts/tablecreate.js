
//Creates table based on object served from fillTable function
function createTableFromObj(tableObj, repDay) {
    const getWorkoutDiv = document.querySelector('.js-workouts');
    const tbl = document.createElement('table');

    tbl.className = 'table js-table hidden';

    const header = tbl.createTHead();
    const headRow = header.insertRow();

    const tdCount = 3;
    const trCount = tableObj[1].length;

    for (var j = 0; j < tdCount; j++) {
        const headCell = headRow.insertCell();
        if (j == 0) {
            headCell.textContent = "Period";
        } else if (j == 1) {
            headCell.textContent = "Weight (in kg)";
        } else {
            headCell.textContent = "Reps";
        }
    }

    const tBody = tbl.appendChild(document.createElement('tbody'))

    for (var i = 0; i < trCount; i++) {
        const tr = tBody.insertRow();
        var period = "Period " + (i + 1);
        var weight = tableObj[1][i];
        var reps = repDay[i]

        for (var j = 0; j < tdCount; j++) {
            var td = tr.insertCell();
            if (j == 0) {
                td.textContent = period;
            } else if (j == 1) {
                td.textContent = weight;
            } else {
                td.textContent = reps;
            }
        }
    }
    //body.removeChild(tbl);
    getWorkoutDiv.appendChild(tbl);
}

//Splits object to create separate tables for every training day
export function fillTable(calculatedBarbellWeights, concatReps) {
    var repsDisplay = concatReps || [];

    const iterations = Object.keys(calculatedBarbellWeights).length;

    for (var i = 0; i < iterations ; i++) {
        var repDay = repsDisplay[i];
        var tableData = Object.entries(calculatedBarbellWeights)[i];

        createTableFromObj(tableData, repDay);
    }
};
