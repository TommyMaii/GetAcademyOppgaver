window.onload = function createHTML(){

    addFirstRow();
    addSecondRow();
    addThirdRow();
    addFourthRow();
    addFifthRow();

}
function addCell(className, data){
    document.getElementById("board").innerHTML += /*HTML*/ 
    `
    <div class="${className}">${data}</div>
    `
}

function addFirstRow(){

    addCell("cell cell-3", "6")
    addCell("cell cell-1", "7")
    addCell("cell cell-2", "8")
    addCell("cell cell-3", "9")
    addCell("cell cell-1", "10")

}
function addSecondRow(){

    addCell("cell cell-2", "5")
    addCell("","")
    addCell("","")
    addCell("","")
    addCell("cell cell-2", "11")

}
function addThirdRow(){

    addCell("cell cell-1", "4")
    addCell("cell cell-3", "3")
    addCell("","")
    addCell("cell cell-1", "13")
    addCell("cell cell-3", "12")

}
function addFourthRow(){

    addCell("","")
    addCell("cell cell-2", "2")
    addCell("","")
    addCell("cell cell-2", "14")
    addCell("","")

}
function addFifthRow(){

    addCell("cell start", "Start")
    addCell("cell cell-1", "1")
    addCell("","")
    addCell("cell cell-3", "15")
    addCell("cell finish", "Mål")

}
