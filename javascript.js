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

let jack1 = [];
function pass1() {
    jack1.push(2,3,4,5);
    console.log(jack1)
}
pass1();
function pass() {
    if (jack1.includes(3)){
        jack1.pop();
        console.log(jack1);
    };
}
pass();

let cram = [1,2,3,4,5]
//creat a num var the set its value to num1//
function pressed(event) {
    let values = event.target.value;
    num += values;
    input.textContent = num;
    // compute = [num1];
    if(isClicked===true){
        console.log('tell me');
        // compute = num1+operator+num2;
        num2 += values;
        input.textContent = compute + num2;
    };
}



function equations(event) {
    num1 = num;
    let operand = event.target.id;
    operator = operand;
    if (operator.includes(operand)){
        console.log('yes')
        num1 = parseInt(num1);
        isClicked = true;
        compute = num1+operator;
        input.textContent = compute;
        // input.textContent =num1+operator;
    };
}

// switch (compute) {
//     case '+':
//         console.log('addition');
//         break
    
// }

let a = [9];
let b= [8];

function smoke() {
    let mass = parseInt(a) + parseInt(b);
    console.log(mass)
}
smoke()

const add = function(num1, num2) {
    console.log('hiroshima')
    let pro = parseInt(num1) + parseInt(num2);
    console.log(pro);
};

function master() {
    console.log(num1,operator,num2);
    console.log(operator);
    // compute = num1+operator+num2;
    console.log(compute)

    if (compute.includes('+')) {
        add(num1,num2);
    } else {
        console.log('bruh...')
    }
  
}

// function second(event){
//     let values = event.target.value;
//     num2 += [values];
//     input.textContent += num2;
//     console.log('num2'+num2);
// }

// if (isClicked===true) {
//     second();
//     console.log('tell me');
// };