let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let subTotal = document.getElementById('subtotal').value;
    let tip = document.getElementById('tip').value;
   
    let total = document.getElementById('total');
    const tipCalculation = (subTotal * tip) /100;

    total.innerText = `${tipCalculation} $`;

})