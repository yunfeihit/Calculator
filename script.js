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
let numA;
let numB;
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
        //as long as a number button is pushed,clear the 'result' 
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
    //if numA already stored a number
    if (numA !== undefined) {
        //get numB:
        numB = Number(storedNum);
        //show the operation in the subWindow:
        //operate and show the result in the mainWindow:
        result = operate(numA, numB, operator);
        //show 'result' in the main window
        mainWindow.textContent = result;
        //show the operator and operation in the subWindow: 
        subWindow.textContent = numA + operator + numB;
        //clear the 'storedNum':
        storedNum = '';
    } else {
        result = 0;
        mainWindow.textContent = result;
    }

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

//3-5: C button
document.querySelector('#btn-C').addEventListener('click', () => {
    if (result == null) {
        //if 'result' is empty: reduce one of the 'storedNum' and showing in the mainWindow
        storedNum = storedNum.toString().slice(0, -1);
        mainWindow.textContent = storedNum;
    } else {
        //if 'result' is not empty: reduce one of the 'result' and showing in the mainWindow:
        result = Number(result.toString().slice(0, -1));
        mainWindow.textContent = result;
    }
})

//3-6: '.' button
document.querySelector('#btn-dot').addEventListener('click', () => {
    if (result == null) {
    //if 'result' is empty: add '.' in the storedNum
        //if the number is an int(without '.'), put a '.' in the last, if not, do nothing:
        if (!storedNum.includes('.')) {
            storedNum = storedNum + '.';
            mainWindow.textContent = storedNum;
        }
    } else {
        storedNum = '.';
        mainWindow.textContent = storedNum;
    }
})