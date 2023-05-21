let firstInput = document.getElementById("firstInput");
let secondInput = document.getElementById("secondInput");
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let divide = document.getElementById("divide");
let paragraph = document.getElementById("p");

const additionCalc = (e1, e2) => {
  if (e1 === "" || e2 === "") {
    paragraph.innerHTML = "";
    return;
  }
  paragraph.innerHTML = +e1 + +e2;
};

const subtractionCalc = (e1, e2) => {
  if (e1 === "" || e2 === "") {
    paragraph.innerHTML = "";
    return;
  }
  paragraph.innerHTML = +e1 - +e2;
};

const multiplicationCalc = (e1, e2) => {
  if (e1 === "" || e2 === "") {
    paragraph.innerHTML = "";
    return;
  }
  paragraph.innerHTML = +e1 * +e2;
};

const divideCalc = (e1, e2) => {
  if (e1 === "" || e2 === "") {
    paragraph.innerHTML = "";
    return;
  }
  if (+e2 === 0) {
    paragraph.innerHTML = "idk";
    return;
  }
  paragraph.innerHTML = +e1 / +e2;
};

addition.onclick = () => additionCalc(firstInput.value, secondInput.value);

subtraction.onclick = () =>
  subtractionCalc(firstInput.value, secondInput.value);

multiplication.onclick = () =>
  multiplicationCalc(firstInput.value, secondInput.value);

divide.onclick = () => divideCalc(firstInput.value, secondInput.value);
