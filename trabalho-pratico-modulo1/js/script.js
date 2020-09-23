window.addEventListener('load', start);

function start() {}

var redOutput = document.querySelector('#red-value');
redOutput.value = 0;

var greenOutput = document.querySelector('#green-value');
greenOutput.value = 0;

var blueOutput = document.querySelector('#blue-value');
blueOutput.value = 0;

var colorSelected = document.querySelector('#square');
colorSelected.style.backgroundColor =
    'rgb(' +
    redOutput.value +
    ',' +
    greenOutput.value +
    ',' +
    blueOutput.value +
    ')';

var colorText = document.querySelector('#colorText');
colorText.innerHTML =
    'RGB(' +
    redOutput.value +
    ',' +
    greenOutput.value +
    ',' +
    blueOutput.value +
    ')';

function redValueChange(redValue) {
    redValue = document.querySelector('#red').value;
    redOutput.value = redValue;

    colorSelected.style.backgroundColor =
        'rgb(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';

    colorText.innerHTML =
        'RGB(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';
}

function greenValueChange(greenValue) {
    greenValue = document.querySelector('#green').value;
    greenOutput.value = greenValue;
    colorSelected.style.backgroundColor =
        'rgb(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';

    colorText.innerHTML =
        'RGB(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';
}

function blueValueChange(blueValue) {
    blueValue = document.querySelector('#blue').value;
    blueOutput.value = blueValue;
    colorSelected.style.backgroundColor =
        'rgb(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';

    colorText.innerHTML =
        'RGB(' +
        redOutput.value +
        ',' +
        greenOutput.value +
        ',' +
        blueOutput.value +
        ')';
}