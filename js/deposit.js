document.getElementById("btn-deposit").addEventListener('click', function(){
    // step 1
    const depositField = document.getElementById("deposit-field");
    const depositFieldValueString = depositField.value ;
    const depositFieldValue = parseFloat(depositFieldValueString);
    
    // step 2
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositTotalAmountString = depositTotal.innerText;
    const depositTotalAmount =parseFloat(previousDepositTotalAmountString);
    
    // step 3 
    const newdepositTotalAmount = depositTotalAmount + depositFieldValue ;
    depositTotal.innerText = newdepositTotalAmount;

    // step 4 
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(previousBalanceTotalAmountString);


    // step 5
    const newBalanceTotalAmount = balanceTotalAmount + depositFieldValue;
    balanceTotal.innerText = newBalanceTotalAmount;

    depositField.value = '';
    
});
