window.onload = createHeaderRow;






function createHeaderRow() {
document.getElementById("mytable").innerHTML = /*HTML*/`
<tr>
<th>Dag</th>
<th>Time</th>
<th>Minutt</th>
<th>Temperatur</th>
</tr> 
`
};

function createData(Dag,Time,Minutt,Temperatur) {

    let dataa = "";
    const i = document.getElementById("howManyRows").value;

    for(let y = 0; y < parseInt(i); y++){

        dataa +=
        `<tr>
        <td>${Dag}</th>
        <td>${Time}</th>
        <td>${Minutt}</th>
        <td>${Temperatur}</th>
        </tr>`
        
    };
    
    document.getElementById("mytable").innerHTML += dataa;
 };

function createDataRowsByButton() {
    const day = document.getElementById("day").value;
    const hour = document.getElementById("hour").value;
    const minute = document.getElementById("minute").value;
    const temp = document.getElementById("temp").value;

    if(day == ""){
        alert("Check Input Please")
        throw new Error();
    }
    createData(day,hour,minute,temp);
    
}