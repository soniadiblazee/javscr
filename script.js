function showAlert() {
    alert("YEOOOUUCH")
}

//for the second part of the lab
function getInpVal() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
  }
  
  
  function showResult(result) {
    document.getElementById("result").innerText = "The result is: " + result;
  }
  
  
  function add() {
    const [num1, num2] = getInpVal();
    displayResult(num1 + num2);
  }
  
  
  function subtract() {
    const [num1, num2] = getInpVal();
    displayResult(num1 - num2);
  }
  
  
  function multiply() {
    const [num1, num2] = getInpVal();
    displayResult(num1 * num2);
  }
  
  
  function divide() {
    const [num1, num2] = getInpVal();
    if (num2 === 0) {
      alert("Cannot divide by zero!");
    } else {
      displayResult(num1 / num2);
    }
  }
  
  
  // Clear input fields and reset the result display
  function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result will appear here";
  }