document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan() {
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const interestRate = parseFloat(
    document.getElementById("interestRateInput").value
  );
  const loanTerm = parseFloat(document.getElementById("loanTermInput").value);
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanAmount)) {
    alert("Please Enter valid number for all fields");
  }

  const monthlyInterest = interestRate/100/12;
  const totalPayment = loanTerm;
  const monthlyPayement = (loanAmount*monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));
  const totalInterest = (monthlyPayement * totalPayment)-loanAmount;
  displayResult(monthlyPayement,totalInterest);
}

function displayResult(monthlyPayement,totalInterest){
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p><strong>Monthly Payment ${monthlyPayement.toFixed(2)} </strong></p> 
    <p><strong>Total Interest ${totalInterest.toFixed(2)} </strong></p>
    `
}