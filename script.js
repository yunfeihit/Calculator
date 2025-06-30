//PART ONE: define operation functions
function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {return 'ERROR';}
    return (a/b).toFixed(2);
}

function remainder(a, b) {
    return a%b;
}

function operate(numA, numB, opr) {
    switch(opr) {
        case '+':
            return add(numA, numB);
            break;
        case '-':
            return subtract(numA, numB);
            break;
        case '×':
            return multiply(numA, numB);
            break;
        case '÷':
            return divide(numA, numB);
            break;
        case '%':
            return remainder(numA, numB);
            break;
    }
}


//PART TWO: store operators and numbers
let numA = 0;
let numB = 0;
let operator;
let storedNum = '';
let result;

subWindow = document.querySelector('#showStoredNumbers');
mainWindow = document.querySelector('#showPushedButtons');



//PART THREE: define eventlistener for button
//3-1: number button
const numButtons = document.querySelectorAll('.numBtn');
numButtons.forEach((numBtn) => {
    numBtn.addEventListener('click', (event) => {
        //store the number one after another in 'storedNum'
        storedNum += event.target.textContent;
        //show the number in the mainWindow
        mainWindow.textContent = storedNum;
        result = null;
    })
})

//3-2: operator button
const oprButtons = document.querySelectorAll('.oprBtn');
oprButtons.forEach((oprBtn) => {
    oprBtn.addEventListener('click', (event) => {
        //get operator:
        operator = event.target.textContent;
        //store the 'storedNum' to numA when 'result' is null(get numA)
        if (result == null) {
            numA = Number(storedNum);        
        } else {
            numA = result;
        }        
        //show numA and the operator in the subWindow:
        subWindow.textContent = numA + operator;
        //clear the storedNum:
        storedNum = '';    
    })
})

//3-3: '=' button
document.querySelector('#btn-equal').addEventListener('click', () => {
    //get numB:
    numB = Number(storedNum);
    //show the operation in the subWindow:
    //operate and show the result in the mainWindow:
    result = operate(numA, numB, operator);
    mainWindow.textContent = result;
    //show the operator and operation in the subWindow: 
    subWindow.textContent = numA + operator + numB;
    //store the result in the numA:
    storedNum = '';
})

//3-4: AC button
document.querySelector('#btn-AC').addEventListener('click', () => {
    numA = 0;
    numB = 0;
    operator = '';
    storedNum = '';
    subWindow.textContent = '';
    mainWindow.textContent = '';
    result = null;
})

//3-5: . button
document.querySelector('#btn-dot').addEventListener('click', () => {
    return;
})


//3-6: C button
document.querySelector('#btn-C').addEventListener('click', () => {
    storedNum = Number(storedNum.toString().slice(0, -1));
    mainWindow.textContent = storedNum;
})