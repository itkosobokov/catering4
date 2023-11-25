var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultyply = document.getElementById("buttonMultyply");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");



function makeOperation(operationCode){
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "-") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    } else {
        window.prompt("Неизвестная операция");
    }
    
    window.alert(result);

}



function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}
var arrayOfButtons = [buttonPlus, buttonMinus, buttonMultyply, buttonDevide];

for (var index = 0; index < arrayOfButtons.length; index++) {
    //const element = array[index];
    var button = arrayOfButtons[index];
    button.addEventListener('click', onOperationButtonClick);    
}

/*buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultyply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);
*/