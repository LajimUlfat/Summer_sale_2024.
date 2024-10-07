let total = 0;
let DiscountPrize = 0;
let totalPrize = 0;


function getItemValue(data){
    const itemContainer = document.getElementById("purchase-item");
    const itemPrice = data.parentNode.childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerText = itemPrice;
    itemContainer.appendChild(li);

    const price = data.parentNode.childNodes[3].innerText.split(" ")[0];
    
    total = parseFloat(total)+ parseFloat(price);
   document.getElementById("ItemPriceValue").innerText = total;
   document.getElementById("newtotalprice").innerText = total ;

  
}


    

     
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener('click', function(){

    
        const cupponCodeRr = document.getElementById("cupponText");
        const cupponCode = cupponCodeRr.value ;
    
    if(cupponCode === "SELL200" && total>=200){
        
        const discountRound = (20/100) * total;
        const discounts = discountRound.toFixed(2);
        document.getElementById("discountPrice").innerText = discounts;
        
        const payableAmountRound = total - discounts;
        const payableAmount = payableAmountRound.toFixed(2);
        document.getElementById("newtotalprice").innerText = payableAmount;
        cupponCodeRr.value = null;
     }
     else {
       
        alert('Can not purchase discount . Please try again ! ');
        cupponCodeRr.value = null;
     }

    
})

document.getElementById("purchaseItem").addEventListener('click',function(){
 
   Swal.fire({
      title: "Congratulations!",
      text: "You have purchased the item",
      icon: "success"

      
    });

})


   // window.location.href = '/'

 //