
async function getExchangeRateForUSD() {
    const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_IW2EViKp1xyTNuAHelOdB38Yjci7NX4kM58XsaSW");
    const data = await response.json();
    return data.rates.USD;
}

async function getExchangeRateForRands() {
    try {
        const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_IW2EViKp1xyTNuAHelOdB38Yjci7NX4kM58XsaSW");
        const data = await response.json();

        // Assuming ZAR is the currency code for Rands
        const exchangeRateForRands = data.rates.ZAR;

        return exchangeRateForRands;
    } catch (error) {
        console.error('Error fetching exchange rate for Rands:', error);
        throw error; // You might want to handle the error in the calling code
    }
}

function validateAmount() {
    const amount = document.getElementById("amount").value;

    if (amount === "" || amount === "0") {
                alert("Please enter a valid amount!");
            } else {
                convert();
            }
}
        async function convert() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const amount = document.getElementById("amount").value;
    let exchangeRate;

    // Get the exchange rate based on the selected currency
    if (fromCurrency === "USD") {
       // exchangeRate = await getExchangeRateForUSD();
       exchangeRate = 83,31;
    } else if (fromCurrency === "ZAR") {
        //exchangeRate = await getExchangeRateForRands();
        exchangeRate = 4,43;
    }

    // Perform the conversion
    const convertedAmount = amount * exchangeRate * 0.98;

    // Display the result
    document.querySelector(".result").textContent = convertedAmount;
}
function openHelp() {
    var popup = document.createElement('div');
    popup.innerHTML =`
    <div class="popup-content">
            <span onclick="closeHelp()" class="close">&times;</span>
            
        <p>Here's how you can navigate and use the <strong> QUICK PAY CURRENCY CONVERTER </strong> :</p>
        
        <ol>
            <li>Select the <strong>base currency</strong> from the <strong>dropdown </strong> menu. This will be the currency you are converting from.</li><br>
            <li>Enter the amount you want to convert in the <strong>'Amount'</strong> input field.</li><br>
            <li>Click on the <strong>'Convert'</strong> button to initiate the conversion process. The converted amount will be displayed in the <strong>'Amount in Rupees'</strong> field.</li><br>
            <li>For further assistance,<a href="https://wa.me/8699758198" target="_blank" style="text-decoration: underline; color: blue;">talk to us on whatsapp</a> and our customer support will assist you.</li><br>
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
