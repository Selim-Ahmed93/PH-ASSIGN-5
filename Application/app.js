
document.getElementById('Donate-btn')
.addEventListener('click',function(){
    
    

    const donationInput =document.getElementById('input-donation').value;
    console.log(donationInput);
    const donateBalance=document.getElementById('Donate-balance')


    const totalBalance= donateBalance + donationInput
    // console.log(totalBalance);
}) 