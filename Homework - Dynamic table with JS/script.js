
let btnClick = document.getElementById('button');

function makeDynamicTable() {

    let tableElement = document.getElementById('myTable');
    let inputRows = document.getElementById('rows').value;
    let inputColumns = document.getElementById('columns').value;



    let tbody = '';

    for (let i = 1; i <= inputRows; i++) {

        tbody += `<tr>`;

        for (let j = 1; j <= inputColumns; j++) {

            tbody += `<td style="border: 1px solid black; padding:5px;">`;
            tbody += 'Row:' + i + ',' + 'Col:' + j;
            tbody += `</td>`;

        }

        tbody += `</tr>`;
    }
    tableElement.innerHTML = `<table style="border: 3px solid black;"> ${tbody} </table>`;
}
btnClick.addEventListener('click', makeDynamicTable);