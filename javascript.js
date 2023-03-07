
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
        console.log('tell me');
        num2 += values;
        input.textContent = compute + num2;
    };
}



function equations(event) {
    num1 = num;
    num2 = [];
    let operand = event.target.id;
    operator = operand;
    if (operator.includes(operand)){
        console.log('yes')
        isClicked = true;
        compute = num1+operator;
        input.textContent = compute;
    };
};

const add = function(num1, num2) {
    console.log('hiroshima')
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    output.textContent = compute + num2 + '=';
    num = sum;
    input.textContent = sum;
    num2=[];
};

const subtract = function(num1, num2) {
    let difference = parseInt(num1) - parseInt(num2);
    output.textContent = compute + num2 + '=';
    num = difference;
    input.textContent = difference;
    num2=[];
};



function master() {
    console.log(num1,operator,num2);
    console.log(operator);
    console.log(compute)
    //Make switch statements//
    if (compute.includes('+')) {
        add(num1,num2);
    };
    if(compute.includes('-')) {
        subtract(num1,num2)
    }; 
  
};