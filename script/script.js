let displayContent = document.querySelector("#display-content");
let previewContent = document.querySelector("#preview");
let curContent = "";
let curOperator = "";
let curNumber = 0.0;

const clearEntryButton = document.querySelector(".clear-entry");
const clearAllButton = document.querySelector(".clear-all");
const backspaceButton = document.querySelector(".backspace");
const plusButton = document.querySelector(".plus");
const multiplyButton = document.querySelector(".multiply");
const minusButton = document.querySelector(".minus");
const divisionButton = document.querySelector(".division");
const dotButton = document.querySelector(".dot");
const transButton = document.querySelector(".plus-and-minus");
const equalButton = document.querySelector(".equal");
const numberButtons = document.querySelectorAll(".number");

function getNumber() {
  numberButtons.forEach((number)=>{
    number.addEventListener("click", ()=> {
      console.log(curNumber);
    });
  });
}

// initialize
displayContent.innerHTML = "DISPLAY";
previewContent.innerHTML = "pre + view &divide;"
getNumber();