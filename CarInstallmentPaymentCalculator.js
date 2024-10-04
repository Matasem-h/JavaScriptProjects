// Function to calculate monthly installment payments using the formula for an amortizing loan
function calculateInstallmentPayment(price, downPayment, annualInterestRate, loanTermInYears) {
    // Calculate the loan amount
    let loanAmount = price - downPayment;

    // Converting annual interest rate to a monthly interest rate
    let monthlyInterestRate = (annualInterestRate / 100) / 12;

    // Calculating the total number of monthly payments
    let totalPayments = loanTermInYears * 12;

    // Formula for calculating monthly payment: M = P[r(1+r)^n]/[(1+r)^n-1]
    let monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return monthlyPayment;
}

// Input values for the 2024 Toyota Corolla purchase
let carPrice = 11000;  // Price of 2024 Toyota Corolla
let downPayment = 2000;  // Down payment in USD
let interestRate = 5;  // Annual interest rate in percentage
let YearlyLoanTerm = 3;  // Loan term in years

// Calculate the monthly payment
let monthlyPayment = calculateInstallmentPayment(carPrice, downPayment, interestRate, YearlyLoanTerm);

// Display the result in the console
console.log("Monthly Installment Payment for 2024 Toyota Corolla: $" + monthlyPayment.toFixed(2));
