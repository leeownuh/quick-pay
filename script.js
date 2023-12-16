
        
   function getPaymentOption() {
    return document.querySelector('input[name="paymentOption"]:checked');
}

function getWithdrawalCharge() {
    return parseFloat(getPaymentOption().value);
}

function getAmount() {
    return parseInt(document.getElementById('amount').value);
}

function calculateOfficeAmount() {
    var amount = getAmount();
    var withdrawalCharge = getWithdrawalCharge();
    return amount - (amount * withdrawalCharge);
}

function calculateIndiaAmount(officeAmount) {
    return officeAmount * 83;
}

function calculateInterest(indiaAmount) {
    return indiaAmount * 0.06;
}

function calculateRupees(indiaAmount, interest) {
    return indiaAmount - interest;
}

function calculateUSD(rupees) {
    return rupees / 83;
}

function calculateAmounts() {
    var officeAmount = calculateOfficeAmount();
    var indiaAmount = calculateIndiaAmount(officeAmount);
    var interest = calculateInterest(indiaAmount);
    var rupees = calculateRupees(indiaAmount, interest);
    var usd = calculateUSD(rupees);

    document.getElementById('receivedAmount').textContent = officeAmount.toFixed(2);
    document.getElementById('resultAmount').textContent = usd.toFixed(2);
    document.getElementById('equivalentAmount').textContent = rupees.toFixed(2);
}
        function showInterestRate(paymentOption) {
            var radioButton = document.querySelector('input[name="paymentOption"]:checked'); 
            var interestRate = parseFloat(radioButton.value);
            const interestRateDisplay = document.getElementById('interestRateDisplay');
            interestRateDisplay.textContent = (interestRate*100).toFixed(2) + '%';
        }
            
        function openHelp() {
            var popup = document.createElement('div');
            popup.innerHTML =` <div class="popup-content">
            
                 <span onclick="closeHelp()" class="close">&times;</span>
                  <p>Here's how you can use the <strong>Quick Pay Currency Converter</strong>:</p>
    
    <ol>
        <li>Select the <strong>payment option</strong> from the available choices. This determines the withdrawal charge applied to the amount.</li><br>
        <li>Choose the <strong>currency you are converting from</strong>. This is the initial currency before conversion.</li><br>
        <li>Enter the <strong>amount</strong> you want to convert in the 'Amount' input field.</li><br>
        <li>Click on the <strong>'Submit'</strong> button to calculate the amount received by Quick Pay and the equivalent amount in India.</li><br>
        <li>Review the displayed amounts and contact us on <a href="https://api.whatsapp.com/send?phone=+263774074262&text=Hello%21%20I%20have%20a%20question%20about%20Quick%20Pay%20Money%20Transfer." target="_blank" style="text-decoration: underline; color: blue;">WhatsApp</a> for any assistance or further information.</li><br>
        <p><strong>This website was developed and designed by<br><a href="https://wa.me/8699758198" target="_blank" style="text-decoration: underline;">Ownuh Melds</a></strong></p>
    </ol>
  </div>`;
    popup.classList.add('popup');
    document.body.appendChild(popup);
}

function closeHelp() {
    var popup = document.querySelector('.popup');
    if (popup) {
        popup.parentNode.removeChild(popup);
    }
}

document.querySelector('.popup-content .close').addEventListener('click', closeHelp);
