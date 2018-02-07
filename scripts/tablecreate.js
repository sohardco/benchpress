const body = document.body;
const div = document.createElement('div');

//Creates table based on object served from fillTable function
function createTableFromObj(tableObj) {
    const tbl = document.createElement('table');

    tbl.className = "table js-table hidden";
    //tbl.id = tableObj[0];
    //var th = tbl.createTHead();
    const tdCount = 3;
    const trCount = tableObj[1].length;

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
    div.appendChild(tbl);
}

//Splits object to create separate tables for every training day
export function fillTable(calculatedBarbellWeights) {
    const iterations = Object.keys(calculatedBarbellWeights).length;

    div.className = "workouts js-workouts";
    body.appendChild(div);

    for (var i = 0; i < iterations ; i++) {
        var tableData = Object.entries(calculatedBarbellWeights)[i];
        createTableFromObj(tableData);
    }
};

//check if div with tables is present
export function isTablePresent(){
    const element =  document.querySelector('.js-workouts');

    if (typeof(element) != 'undefined' || element != null){
        return false
    }
}
