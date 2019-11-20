let display = document.querySelector("#display-content");
let preview = document.querySelector("#preview");
let curOperator = "";
let curNumber = 0.0;
let resNumber = 0.0;
let isFirst = 1;
let isShow = 0;

const clearEntryButton = document.querySelector(".clear-entry");
selectClearEntry();
const clearAllButton = document.querySelector(".clear-all");
selectClearAll();
const backspaceButton = document.querySelector(".backspace");
selectBackspace();
const operatorButtons = document.querySelectorAll(".operator");
selectOperator();
const plusButton = document.querySelector(".plus");

const multiplyButton = document.querySelector(".multiply");

const minusButton = document.querySelector(".minus");

const divisionButton = document.querySelector(".division");

const equalButton = document.querySelector(".equal");
selectEqual();
const dotButton = document.querySelector(".dot");
selectDot();
const transButton = document.querySelector(".plus-and-minus");
selectTrans();
const numberButtons = document.querySelectorAll(".number");
selectNumber();

function selectNumber() {
  numberButtons.forEach(number => {
    number.addEventListener("click", () => {
      if(isShow) {
        display.textContent = "";
        isShow = 0;
      }
      let hitNumber = parseFloat(number.textContent);
      if (display.textContent === "" && hitNumber === 0) {
        return;
      } else {
        display.textContent = display.textContent + String(hitNumber);
      }
    });
  });
}

function selectClearEntry() {
  clearEntryButton.addEventListener("click", () => {
    display.textContent = "";
  });
}

function selectClearAll() {
  clearAllButton.addEventListener("click", () => {
    curNumber = 0.0;
    resNumber = 0.0;
    curOperator = "";
    display.textContent = "";
    preview.textContent = "";
    isFirst = 1;
  });
}

function calculate(operator, a, b) {
  if (operator === "plus") {
    return a + b;
  }
  if (operator === "minus") {
    return a - b;
  }
  if (operator === "multiply") {
    return a * b;
  }
  if (operator === "division") {
    if (a === 0.0) {
      return "ERROR";
    }
    else {
      return a / b;
    }
  }
}

function selectOperator() {
  operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
      if (!display.textContent | isShow) {
        return;
      } else {
        if (isFirst) {
          resNumber = parseFloat(display.textContent);
          curOperator = operator.id;
          preview.textContent = display.textContent + operator.textContent;
          display.textContent = "";
          isFirst = 0;
        } else {
          curNumber = parseFloat(display.textContent);
          resNumber = calculate(curOperator, resNumber, curNumber);
          curOperator = operator.id;
          preview.textContent = preview.textContent + display.textContent + operator.textContent;
          display.textContent = String(resNumber);
          isShow = 1;
        }
      }
    });
  });
}

function selectEqual() {
  equalButton.addEventListener("click", () => {
    curNumber = parseFloat(display.textContent);
    resNumber = calculate(curOperator, resNumber, curNumber);
    display.textContent = String(resNumber);
    curNumber = 0.0;
    resNumber = 0.0;
    curOperator = "";
    preview.textContent = "";
    isFirst = 1;
    isShow = 1;
  });
}

function selectDot() {
  dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
      display.textContent = display.textContent + ".";
    }
  });
}

function selectBackspace() {
  backspaceButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
  });
}

function selectTrans() {
  transButton.addEventListener("click", () => {
    if (display.textContent.includes("-")) {
      display.textContent = display.textContent.slice(1);
    } else {
      display.textContent = "-" + display.textContent;
    }
  });
}