

let input = document.querySelector('.current-operand');
let output = document.querySelector('.previous-operand');

let currentNum = '';
let previousNum = null;
let operator = null;
let sum = master();
let isClicked = false;

function pressed(event) {
    let values = event.target.value;
    currentNum += values;
    input.textContent = currentNum;
    if (isClicked===true){
         input.textContent = previousNum + operator + currentNum;
    }
};

function equations(event) {
    if(operator == null){
        previousNum = currentNum;
        
    } else if(operator !== null){
        previousNum = master();
    }
    let value = event.target.id;
    operator = value;
    input.textContent = previousNum + '' + operator;
    currentNum = '';
    isClicked = true;
};

function master() {
    switch(operator) {
        case '+':
            add(previousNum, currentNum);
            return parseFloat(previousNum) + parseFloat(currentNum);
            break;
            break;
        case '-':
            subtract(previousNum, currentNum);
            return parseFloat(previousNum) - parseFloat(currentNum);
            break;
            break;
        case 'x':
            multiply(previousNum, currentNum);
            return parseFloat(previousNum) * parseFloat(currentNum);
            break;
            break;
        case '÷':
            divide(previousNum, currentNum);
            return parseFloat(previousNum) / parseFloat(currentNum);
            break;
            break;
    };
};

const add = function(previousNum, currentNum) {
   let sum = parseFloat(previousNum) + parseFloat(currentNum);
   output.textContent = previousNum + operator + currentNum + '=';
   input.textContent = sum;
};

function subtract() {
    let sum = parseFloat(previousNum) - parseFloat(currentNum);
    output.textContent = previousNum + operator + currentNum + '=';
    input.textContent = sum;
};

const multiply = function() {
    let sum = parseFloat(previousNum) * parseFloat(currentNum);
    output.textContent = previousNum + operator + currentNum + '=';
    input.textContent = sum;
};

const divide = function() {
    let sum = parseFloat(previousNum) / parseFloat(currentNum);
    output.textContent = previousNum + operator + currentNum + '=';
    input.textContent = sum;
};

function allClear() {
    currentNum = '';
    previousNum = null;
    operator = null;
    output.textContent = '';
    input.textContent = '';
};