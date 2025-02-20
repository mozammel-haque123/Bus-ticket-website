const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function(){
    
    menuBtn.children[0].classList.toggle('hidden');
    const closeIcon = document.getElementById('close-icon');
    closeIcon.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
})

// start bus tarminal
const selectedSeat = document.getElementById('selected-seat');
const defaultText = document.getElementById('default-text');
const totatotalBookedEl = document.getElementById('total-booked');
let availableSeat =  document.getElementById('available-seat');
let totalPrice =  document.getElementById('total-price');
let couponField =  document.getElementById('coupon-field');
let couponBtn =  document.getElementById('coupon-btn');


let sopurnoMainas = 0
  let amtiArrai = []
function handleSelectSeat(event){
    const events = event.innerText
    if(amtiArrai.includes(events)){
        alert('Seat already added 😕');

    }
    else{
        
        if(amtiArrai.length == 4){
            alert('Maximum seat added 😕');
            return;
     }else if(amtiArrai.length == 3){
        couponField.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
        
     }
    
  
    // console.log(event.innerText);
    const selectedSeatTex = `
   <li class="flex justify-between"> 
   <p>${events}</p>
    <p>Economy</p>
    <p>550</p>
    </li>
    `
defaultText.classList.add('hidden')
selectedSeat.innerHTML += selectedSeatTex;
amtiArrai.push(events);
// let totalBlok = parseFloat(totatotalBookedEl.innerText);
// const langthArray = amtiArrai.length;
// totalBlok = langthArray;
// totatotalBookedEl.innerText = totalBlok;

// ------------
const langthArray = amtiArrai.length;
// let totalBloks = langthArray;
totatotalBookedEl.innerText = langthArray;

let available = parseFloat(availableSeat.innerText);
// sopurnoMainas = available;
// available = available
available--
availableSeat.innerText = available;

sopurnoMainas += 550
totalPrice.innerText = sopurnoMainas.toFixed(2);


event.classList.add('bg-primary','text-white');
    }


}




couponBtn.addEventListener('click', function(){
    let totalPrice =  document.getElementById('total-price').innerText;
    let disCaunt = totalPrice;
    let disCauntTotal = disCaunt * 0.15;
    let discauntMainas = disCaunt - disCauntTotal;
 

// ------------------------------
    
let disCauntbisparcent = totalPrice;
let disCauntBispaccentTotal = disCauntbisparcent * 0.20;
let discauntBisparcentMainas = disCauntbisparcent - disCauntBispaccentTotal;


    let couponField =  document.getElementById('coupon-field');
    let showCouponPrice =  document.getElementById('show-coupon-price');
    let grandTotal =  document.getElementById('grand-total');
    const EnterYourName = document.getElementById('Enter-Your-Name');
    const phoneNumber = document.getElementById('phone-number');
    const yourEmail = document.getElementById('Your-Email');
    if(couponField.value !== 'NEW50' && couponField.value !== 'Couple 20'){
     return alert('Your Provided Coupon Code Is Not Valid 😕')
    }

  if(couponField.value == 'NEW50'){
    let innerHiddenInput = `
     <div class="text-lg font-semibold flex justify-between w-full">
         <p class=" items-center">Discount</p>
         <p class=" items-center"> -BDT:${disCauntTotal.toFixed(2)}</p>
        </div>
    ` 
   grandTotal.innerHTML = discauntMainas.toFixed(2);
     
    couponBtn.classList.add('hidden');
    couponField.classList.add('hidden');
    
    EnterYourName.removeAttribute('disabled');
    phoneNumber.removeAttribute('disabled');
    yourEmail.removeAttribute('disabled');

    showCouponPrice.innerHTML += innerHiddenInput;
  }else if(couponField.value == 'Couple 20'){
    let innerHiddenBispercentInput = `
    <div class="text-lg font-semibold flex justify-between w-full">
        <p class=" items-center">Discount</p>
        <p class=" items-center"> -BDT:${disCauntBispaccentTotal.toFixed(2)}</p>
       </div>
   ` 
   showCouponPrice.innerHTML = innerHiddenBispercentInput;
       
   document.getElementById('grand-total').innerText = discauntBisparcentMainas.toFixed(2);
   couponBtn.classList.add('hidden');
   couponField.classList.add('hidden');

   EnterYourName.removeAttribute('disabled');
   phoneNumber.removeAttribute('disabled');
   yourEmail.removeAttribute('disabled');
  }


})


const EnterYourName = document.getElementById('Enter-Your-Name');
const phoneNumber = document.getElementById('phone-number');
 const yourEmail = document.getElementById('Your-Email');
 const nextButton = document.getElementById('nextButton');
 const Continue = document.getElementById('btn-continue');

 EnterYourName.addEventListener('input', function(){

 })
    


function chakInput(){
    if(EnterYourName.value.trim() !== '' && phoneNumber.value.length >= 11 && yourEmail.value.trim() !== ''){
        nextButton.removeAttribute('disabled')
    }
}

EnterYourName.addEventListener('input', chakInput);
phoneNumber.addEventListener('input', chakInput);
yourEmail.addEventListener('input', chakInput);


Continue.addEventListener('click', function(event){
    window.location.reload();
    
})