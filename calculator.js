//The global variablest that hold current state
let num1 = '';
let num2 = '';
let operator = '';
let displayEquation = '';

function operate(firstNum,secondNum,sign){
    switch(sign) {
        case '+':
          return firstNum + secondNum;
          break;
        case '-':
          return firstNum - secondNum;
          break;
        case '*':
          return firstNum * secondNum;
          break;
        case '/':
            return firstNum / secondNum; //Maybe use rounding here
      }
}

function updateDisplay(){
  const currentEqn = document.querySelector('.header');
  currentEqn.textContent = displayEquation;
}

const allButtons = Array.from(document.querySelectorAll('.num'));
for (const button of allButtons) {
  button.addEventListener('click', () => {
    displayEquation += ' ' + button.textContent;
    updateDisplay();
  });
}