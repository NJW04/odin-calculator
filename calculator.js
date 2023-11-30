//The global variablest that hold current state
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
  let eqnArray = stringEquation.split(' ');
  if (eqnArray.length % 2 == 0){
    const display = document.querySelector(".output-section");
    display.textContent = "BAD ERROR!";
  }
  else{
    console.log(eqnArray);
    let answer;
    for (let i=0; i<eqnArray.length-2; i += 2){
      let num1 = Number(eqnArray[i]);
      let sign_ = eqnArray[i+1];
      let num2 = Number(eqnArray[i+2]);
      answer = operate(num1,num2,sign_);
      eqnArray[i+2] = answer;
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
    displayEquation += ' ' + sign.textContent + ' ';
    updateDisplay();
  });
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  displayEquation = '';
  updateDisplay();
  const outputArea = document.querySelector('.output-section');
  outputArea.textContent = '';
});

const dotButton = document.querySelector('.dot');
dotButton.addEventListener('click', () => {
  displayEquation += dotButton.textContent;
  updateDisplay();
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  const outputArea = document.querySelector('.output-section');
  outputArea.textContent = computeAnswer(displayEquation); //Send the function the current eqn in the string for '1+2+3x2' = 12
});