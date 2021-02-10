document.getElementById("PageTitle").innerHTML = "Mr.Sekol Coding Calculator";
function mathAddition(){
let numbOne = parseFloat(document.getElementById("numberOne").value);
let numbTwo = parseFloat(document.getElementById("numberTwo").value);
document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne + numbTwo);
};
function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne - numbTwo);
    };
    function mathMultiply(){
        let numbOne = parseFloat(document.getElementById("numberOne").value);
        let numbTwo = parseFloat(document.getElementById("numberTwo").value);
        document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is:" + parseFloat(numbOne * numbTwo);
        };