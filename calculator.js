function operate(num1, num2, operator) {
    if(operator == "+") {
        return num1 + num2;
    } else if(operator == "-") {
        return num1 - num2;
    } else if(operator == "*") {
        return num1 * num2;
    } else if(operator == "/") {
        return num1 / num2;
    }
}

function calculation() {
    if(result.textContent != '' && displayVAl == 0 && displayVal2 == 0) {
    // if(result.textContent != '' && displayVAl == 0) {
        displayVAl = Number(result.textContent);
        if(result.textContent != '') result.textContent = '';
        if(displayVAl > 0 && result.textContent != '' && displayVal2 == 0 && operator != '') {
            displayVal2 = Number(result.textContent);
            displayVAl = operate(displayVAl, displayVal2, operator.slice(-2, -1));
            finaleResult = displayVAl
            if(resultLength < 9) {
                result.textContent = finaleResult;
            } else {
                result.textContent = roundNum(finaleResult)
            }
            displayVal2 = 0
        }
    }
    if(displayVAl > 0 && result.textContent != '' && displayVal2 == 0 && operator != '') {
        displayVal2 = Number(result.textContent);
        displayVAl = operate(displayVAl, displayVal2, operator.slice(-2, -1));
        finaleResult = displayVAl
        if(resultLength < 9) {
            result.textContent = finaleResult;
        } else {
            result.textContent = roundNum(finaleResult)
        }
        displayVal2 = 0
    }
}

function theDot() {
    if(result.textContent.length < 9 && result.textContent.length !== 8) {
        if(result.textContent.includes('.') !== true){
            result.textContent += btnDot.textContent
        }
    }
}

function minusOrPlus() {
    if(!result.textContent.includes('-') && result.textContent !== '') {
        return result.textContent = '-' + result.textContent
    } else {
        return result.textContent = result.textContent.slice(1)
    }
}

function numbers(btn) {
    // if(displayVAl == 0 && finaleResult > 0 && operator != '') {
    if(displayVAl > 0 && finaleResult > 0 && operator != '' && result.textContent != '') {
        // displayVAl = Number(result.textContent);
        finaleResult = 0
        result.textContent = ''
    }
    // if(displayVAl > 0 && result.textContent == displayVAl ) {
    //     result.textContent = ''
    // }
    if(result.textContent.length < 9) {
        result.textContent += btn.textContent;
    }
}

function clear() {
    result.textContent = '';
    displayVAl = 0;
    displayVal2 = 0;
    finaleResult = 0;
    
}

function equals() {
    if(result.textContent == '' && displayVAl == 0 && displayVal2 == 0) {
        displayVAl = 0;
        displayVal2 = 0;
    } else if(displayVAl == 0 && displayVal2 == 0 && result.textContent != '') {
        displayVAl = 0;
        displayVal2 = 0;
        result.textContent = result.textContent;
    } else if(displayVAl != 0 && displayVal2 == 0 && result.textContent == '') {
        displayVAl = 0;
        displayVal2 = 0;
        result.textContent = ''
    } else if(displayVAl != 0 && displayVal2 == 0 && finaleResult !== 0 && result.textContent == '') {
        displayVAl = displayVAl
        displayVal2 = 0
        finaleResult = displayVAl
    } else if(displayVAl != 0 && displayVal2 == 0 && finaleResult !== 0 && result.textContent != '') {
        displayVAl = displayVAl
        finaleResult = finaleResult
        result.textContent = result.textContent;
    } else if(displayVAl != null && result.textContent != ''){
        calculation()
        console.log(displayVAl)
        console.log(displayVal2)
        console.log(finaleResult)

        if(result.textContent != '') {
            // finaleResult = result.textContent;
            displayVAl = result.textContent; //
            // displayVAl = 0;
            displayVal2 = 0;
        };
    }
}

// function equals1() {
//     if(result.textContent == '' && displayVAl == 0 && displayVal2 == 0) {
//         displayVAl = 0;
//         displayVal2 = 0;
//     } else if(displayVAl == 0 && displayVal2 == 0 && result.textContent != '') {
//         displayVAl = 0;
//         displayVal2 = 0;
//         result.textContent = result.textContent;
//     } else if(displayVAl != 0 && displayVal2 == 0 && result.textContent == '') {
//         displayVAl = 0;
//         displayVal2 = 0;
//         result.textContent = ''
//     } else if(displayVAl != 0 && displayVal2 == 0 && finaleResult !== 0 && result.textContent == '') {
//         displayVAl = displayVAl
//         displayVal2 = 0
//         finaleResult = displayVAl
//     } else if(displayVAl != 0 && displayVal2 == 0 && finaleResult !== 0 && result.textContent != '') {
//         displayVAl = displayVAl
//         finaleResult = finaleResult
//         result.textContent = result.textContent;
//     }
// }

function backspace() {
    return result.textContent = result.textContent.slice(0, -1)
}



function roundNum(num) {
    return (num).toExponential(4)
}



// function roundNum(num) {
//     const absNum = Math.abs(num);
//     let roundedNum;

//     if(absNum >= 1000000000) {
//         roundedNum = (Math.round(absNum / 1000000000) / 10).toFixed(7)
//     } else {
//         roundedNum = absNum.toFixed(7 - Math.floor(Math.log10(absNum)))
//     }

//     if(num < 0) {
//         return `-${roundedNum}`;
//     } else {
//         return roundedNum;
//     }
// }



// All The Buttons 
const buttons = document.querySelectorAll('.number');
// For Display
const result = document.querySelector('#calculation');
// Clear Button
const btnClear = document.querySelector('#clear');
// Numbers Button
const btns = document.querySelectorAll('button');
// Dot Button
const btnDot = document.querySelector('#dot')
// For The Signs -/+
const signs = document.querySelector('#positive-negative');
// Backspace Button
const backSpace = document.querySelector('#backspace');
//Operator 
const operators = document.querySelectorAll('.operator');
// result 
const equal = document.querySelector('#equal');


// To Store The Display Value 

let displayVAl = 0;
let operator = '';
let displayVal2 = 0;
let finaleResult = 0;
let resultLength = finaleResult.toString().length;




// For Backspace 
backSpace.addEventListener('click', () => {
    backspace();
})


// Button For The Signs + / -

signs.addEventListener('click', () => {
    return minusOrPlus();
})

// For The Dot 

btnDot.addEventListener('click', () => {
    theDot();
})

// Button To Clean The Calculator

btnClear.addEventListener('click', () => {
    return clear()
})


// Buttons For Numbers

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // if(displayVAl == 0 && finaleResult > 0 && operator != '') {
        //     displayVAl = Number(result.textContent);
        //     result.textContent = ''
        // }
        // if(result.textContent.length < 9) {
        //     result.textContent += btn.textContent;
        // }
        numbers(btn);
    })
});

// Typing on Numbers using the Keyboard 

window.document.addEventListener('keydown', (e) => {
    // if(Number(e.key) || e.key == 0) {
        
        console.log(e.key)
    // }
    // if()
})


// Buttons For The Operators

operators.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator += `${btn.value}`;
        calculation()
        // if(displayVAl == 0 && displayVal2 == 0){
        //     displayVAl += Number(result.textContent);
        //     if(result.textContent != '') result.textContent = '';
        // };
        // if(displayVAl > 0 && result.textContent != ''){
        //     displayVal2 += Number(result.textContent)
        //     // finaleResult = operate(displayVAl, displayVal2, operator)
        //     if(resultLength < 9) {
        //         // result.textContent = finaleResult;
        //         result.textContent = operate(displayVAl, displayVal2, operator); //
        //         displayVAl += result.textContent; //
        //     } else {
        //         // result.textContent = roundNum(finaleResult);
        //         result.textContent = roundNum(operate(displayVAl, displayVal2, operator)); //
        //         displayVAl += result.textContent; //
        //     }
        //     // displayVAl = 0;
        //     displayVal2 = 0;
        //     // if(displayVAl == 0 && displayVal2 == 0 && finaleResult > 0) for the condition down below
        // } else if(displayVAl == 0 && displayVal2 == 0 && finaleResult > 0) {
        //     displayVal2 += Number(result.textContent)
        //     // displayVAl = finaleResult;
        //     finaleResult = operate(displayVAl, displayVal2, operator)
        //     if(resultLength < 9) {
        //         result.textContent = finaleResult;
        //     } else {
        //         result.textContent = roundNum(finaleResult);
        //     }
        //     displayVAl = 0;
        //     displayVal2 = 0;
        // }
    })
})



// Button For The Equal Sign

equal.addEventListener('click', () => {
    equals()  //

//     if(result.textContent !== '') displayVal2 = Number(result.textContent);
    
//     // if(displayVAl == 0 && displayVal2 > 0 && finaleResult) displayVAl = finaleResult;
//     console.log(displayVAl)
//     console.log(displayVal2)
//     console.log(finaleResult)

//     displayVAl = operate(displayVAl, displayVal2, operator.slice(-1));
//     finaleResult = displayVAl

//     if(finaleResult.toString().length < 9) {
//         result.textContent = finaleResult;
//         console.log(finaleResult)
//     } else {
//         result.textContent = roundNum(finaleResult);
//         console.log(finaleResult)
//     }

//     if(result.textContent != '') {
//         // finaleResult = result.textContent;
//         displayVAl = result.textContent; //
//         // displayVAl = 0;
//         displayVal2 = 0;
//     };
})


