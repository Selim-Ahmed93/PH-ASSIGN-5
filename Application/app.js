


document.getElementById('Donate-btn')
.addEventListener('click', function() {
    
    
    const donationInput = parseFloat(document.getElementById('input-donation').value);
    const donateBalance = parseFloat(document.getElementById('Donate-balance').innerText);

    
    const totalBalance = donationInput + donateBalance;
    
    
    document.getElementById('Donate-balance').innerText = totalBalance;

    
    document.getElementById('input-donation').value = '';
});
