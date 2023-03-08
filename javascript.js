
let input = document.querySelector('.current-operand');
let output = document.querySelector('.previous-operand');

let backspace = document.getElementById('#back');

// let compute = [num1,operator,num2];

// const populate = document.querySelectorAll('.but');
// populate.forEach(populate => {
//     populate.addEventListener('click', (e)=>{
//         let values = e.target.value;
//         compute += [values]
//         input.textContent = compute;
//     });
// })

// const negative = document.getElementById('#-');
// negative.addEventListener('click')

let num = [];
let num1 = [];
let operator = [];
let num2 =[];
let compute = [num1,operator,num2];
let isClicked = false;

function pressed(event) {
    let values = event.target.value;
    num += values;
    input.textContent = num;
    if(isClicked===true){
        num2 += values;
        input.textContent = compute + num2;
    };
};

function equations(event) {
    num1 = num;
    num2 = [];
    let operand = event.target.id;
    operator = operand;
    num = operand;
    if (operator.includes(operand)){
        isClicked = true;
        compute = num1+operator;
        input.textContent = compute;
    };
};

const add = function(num1, num2) {
    let sum = parseFloat(num1) + parseFloat(num2);
    output.textContent = compute + num2 + '=';
    num = parseFloat(sum);
    input.textContent = sum;
    num2=[];
};

function subtract(num1, num2) {
    let difference = parseFloat(num1) - parseFloat(num2);
    output.textContent = compute + num2 + '=';
    num = parseFloat(difference);
    input.textContent = difference;
    num2=[];
};

const multiply = function(num1, num2) {
    let product = parseFloat(num1) * parseFloat(num2);
    output.textContent = compute + num2 + '=';
    num = product;
    input.textContent = product;
    num2=[];
};

const divide = function(num1, num2) {
    let quotient = parseFloat(num1) / parseFloat(num2);
    output.textContent = compute + num2 + '=';
    num = quotient;
    input.textContent = quotient;
    num2=[];
};

function master() {
    //Make switch statements//
    if (operator==='+') {
        add(num1,num2);
    };
    if(operator==='-') {
        subtract(num1,num2)
    }; 
    if (operator==='x') {
        multiply(num1,num2)
    };
    if (operator==='÷') {
        divide(num1,num2)
    };
  
};