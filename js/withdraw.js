document.getElementById("btn-withdraw").addEventListener('click', function(){
// step 1
const withdrawField = document.getElementById("withdraw-field");
const withdrawFieldValueString = withdrawField.value ;
const withdrawFieldValue = parseFloat(withdrawFieldValueString);

// step 2
const withdrawTotal = document.getElementById("withdraw-total");
const previousWithdrawTotalAmountString = withdrawTotal.innerText;
const withdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);

// step 3 
const newWithdrawTotalAmount = withdrawTotalAmount + withdrawFieldValue;
withdrawTotal.innerText = newWithdrawTotalAmount;

// step 4 
const balanceTotal = document.getElementById("balance-total");
const previousBalanceTotalAmountString = balanceTotal.innerText;
const balanceTotalAmount = parseFloat(previousBalanceTotalAmountString);

// step 5
const newBalanceTotalAmount = balanceTotalAmount - withdrawFieldValue;
balanceTotal.innerText = newBalanceTotalAmount;

// step 7 
withdrawField.value = '';
});