//The global variablest that hold current state of eqn
let displayEquation = '';

function operate(firstNum,secondNum,sign){
    switch(sign) {
        case '+':
          return firstNum + secondNum;
          break;
        case '-':
          return firstNum - secondNum;
          break;
        case 'x':
          return firstNum * secondNum;
          break;
        case '÷':
            return (firstNum / secondNum).toFixed(2); //Maybe use rounding here
      }
}

function computeAnswer(stringEquation){
  let eqnArray = [];
  let counter = 0;
  let symbolsToCheck = ['+','-','x','÷'];
  let currentBuiltNumber = '';
  for (let char of displayEquation){ //2+2x3
    if (!symbolsToCheck.includes(char)){
      currentBuiltNumber += char;
    }
    else if (symbolsToCheck.includes(char)){
        eqnArray[counter] = currentBuiltNumber;
        currentBuiltNumber = '';
        eqnArray[counter+1] = char;
        counter+= 2;
      }
    }
  eqnArray[counter] = currentBuiltNumber;
  if (eqnArray.length % 2 == 0){
    return 'bad error!';
  }
  else{
    console.log(eqnArray);
    let answer;
    for (let i=0; i<eqnArray.length-2; i += 2){
      if (eqnArray[i+1] == '÷' && eqnArray[i+2] == 0){
        return "BEEP BOOP DIVIDING BY 0 NONO!";
      }else{
        let num1 = Number(eqnArray[i]);
        let sign_ = eqnArray[i+1];
        let num2 = Number(eqnArray[i+2]);
        answer = operate(num1,num2,sign_);
        eqnArray[i+2] = answer;
      }
    }
    return answer;
  }
}

function updateDisplay(){
  const currentEqn = document.querySelector('.input-section');
  currentEqn.textContent = displayEquation;
}

const allNums = Array.from(document.querySelectorAll('.num'));
for (const num of allNums) {
  num.addEventListener('click', () => {
    displayEquation += num.textContent;
    updateDisplay();
  });
}

const allSigns = Array.from(document.querySelectorAll('.sign'));
for (const sign of allSigns) {
  sign.addEventListener('click', () => {
    displayEquation += sign.textContent ;
    updateDisplay();
    dotButton.removeAttribute('disabled');
  });
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  displayEquation = '';
  updateDisplay();
  const outputArea = document.querySelector('.output-section');
  outputArea.textContent = '';
  dotButton.removeAttribute('disabled');
});

const dotButton = document.querySelector('.dot');
dotButton.addEventListener('click', () => {
  displayEquation += dotButton.textContent;
  updateDisplay();
  dotButton.setAttribute("disabled", "disabled");
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  const outputArea = document.querySelector('.output-section');
  outputArea.textContent = '= ' + computeAnswer(displayEquation); //Send the function the current eqn in the string for '1+2+3x2' = 12
});

const backButton = document.querySelector('.delete');
backButton.addEventListener('click', () => {
  displayEquation = displayEquation.slice(0,displayEquation.length-1);
  updateDisplay();
});

