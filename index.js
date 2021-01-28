var displayValue = document.getElementById("display");
let inputs = [];

function getValue(id) {
  let input = document.getElementById(id);
  let value = parseInt(input.value);
  let previos = inputs[inputs.length - 1];
  if (
    previos !== "+" &&
    previos !== "-" &&
    previos !== "*" &&
    previos !== "/"
  ) {
    inputs[inputs.length - 1] += value;
  } else {
    inputs.push(value);
  }
  display(value);
}

function getOperator(id) {
  let sign = document.getElementById(id);
  let value = sign.value;
  inputs.push(value);
  display(value);
}

function display(v) {
  displayValue.value += v;
}

function clearInput() {
  let value = displayValue.value;
  let newValue = "";
  displayValue.value = "";
  for (let i = 0; i < value.length - 1; i++) {
    console.log(value[i]);
    newValue += value[i];
  }
  display(newValue);
}
//1,2,5,6,+,6,*,3,4,5,6,7,6,*,1,2

function calculate() {
  console.log(inputs);
  inputs = [];
  for (let index = 0; index < inputs.length; index++) {
    switch (inputs[index]) {
      case "*":
        break;

      default:
        break;
    }
  }
}
