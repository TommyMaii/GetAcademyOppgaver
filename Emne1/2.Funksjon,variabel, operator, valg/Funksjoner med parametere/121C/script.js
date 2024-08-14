window.onload = createSkeleton;

function createSkeleton(){
    document.getElementById("dataDiv").innerHTML = /*HTML*/ 
    `
    <button onclick="createLabel()">Create Label</button><br>
    <label>Label Text</label>
    <input type="text" id="labelName"><br>
    <label>Label ID:</label>
    <input type="text" id="Lid"> <br>
    <button onclick="createInput()">Create Input</button><br>
    <label>Input Type</label>
    <Select name="Itype" id="Itype">
        <option value="Text">Text</option>
        <option value="Number">Number</option>
        <option value="Checkbox">Checkbox</option>
        <option value="Radio">Radio</option>
    </Select><br>
    `
}

function createLabel(name, id){

    const Lname = document.getElementById("labelName").value;
    const Lid = document.getElementById("Lid").value;

    document.getElementById("dataDiv").innerHTML += /*HTML*/
    `
    <label for=${Lid}>${Lname}</label>
    `
}
function createInput(type, id){

    const Lid = document.getElementById("Lid").value;
    const Itype = document.getElementById("Itype").value;

    if(document.getElementById("Itype").value == "Checkbox" || "Radio"){

        const data = `<input type=${Itype} id=${Lid}><br/>`
        document.getElementById("dataDiv").innerHTML += data;

        }
    else{
        const data = "</br><input type=${Itype} id=${Lid}><br/>"
        document.getElementById("dataDiv").innerHTML += data;

    };

}