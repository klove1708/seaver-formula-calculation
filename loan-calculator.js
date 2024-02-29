document.getElementById("originationFeeText").value = "1.057"; // Set default origination fee percentage

function showOriginationFee() {
    var loanType = document.getElementById("loanType").value;
    var originationFeeText = document.getElementById("originationFeeText");

    if (loanType === "subUnsubLoan") {
        originationFeeText.value = "1.057";
        clearCalculations();
    } else if (loanType === "plusLoan") {
        originationFeeText.value = "4.228";
        clearCalculations();
    }
}

function clearCalculations() {
    document.getElementById("loanAmount").value = "";
    document.getElementById("originationFeeAmount").value = "";
    document.getElementById("amountDisbursed").value = "";
    document.getElementById("loanAmountNeeded").value = "";
}

function calculateLoan() {
    var loanType = document.getElementById("loanType").value;
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);

    if (isNaN(loanAmount)) {
        alert("Please enter a valid loan amount.");
        return;
    }

    var originationFeePercent = (loanType === "subUnsubLoan") ? 1.057 : 4.228;
    var originationFeeAmount = Math.ceil((originationFeePercent / 100) * loanAmount);
    var amountDisbursed = Math.ceil(loanAmount - originationFeeAmount);
    var loanAmountNeeded = Math.ceil(loanAmount + originationFeeAmount);

    document.getElementById("originationFeeAmount").value = originationFeeAmount;
    document.getElementById("amountDisbursed").value = amountDisbursed;
    document.getElementById("loanAmountNeeded").value = loanAmountNeeded;
}