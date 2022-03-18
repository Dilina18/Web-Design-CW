// import add to cart btns

var cart1 = document.getElementById('btn-001');
var cart2 = document.getElementById('btn-002');
var cart3 = document.getElementById('btn-003');
var cart4 = document.getElementById('btn-004');
var cart5 = document.getElementById('btn-005');
var cart6 = document.getElementById('btn-006');

// item 1 operation IDs

var div1 = document.getElementById('div1');
var plus1 = document.getElementById('plus1');
var minus1 = document.getElementById('minus1');
var qty1 = document.getElementById('qty1');
var remove1 = document.getElementById('remove1');

// item 2 operation IDs

var div2 = document.getElementById('div2');
var plus2 = document.getElementById('plus2');
var minus2 = document.getElementById('minus2');
var qty2 = document.getElementById('qty2');
var remove2 = document.getElementById('remove2');

// item 3 operation IDs

var div3 = document.getElementById('div3');
var plus3 = document.getElementById('plus3');
var minus3 = document.getElementById('minus3');
var qty3 = document.getElementById('qty3');
var remove3 = document.getElementById('remove3');

// item 4 operation IDs

var div4 = document.getElementById('div4');
var plus4 = document.getElementById('plus4');
var minus4 = document.getElementById('minus4');
var qty4 = document.getElementById('qty4');
var remove4 = document.getElementById('remove4');

// item 5 operation IDs

var div5 = document.getElementById('div5');
var plus5 = document.getElementById('plus5');
var minus5 = document.getElementById('minus5');
var qty5 = document.getElementById('qty5');
var remove5 = document.getElementById('remove5');

// item 6 operation IDs

var div6 = document.getElementById('div6');
var plus6 = document.getElementById('plus6');
var minus6 = document.getElementById('minus6');
var qty6 = document.getElementById('qty6');
var remove6 = document.getElementById('remove6');

// total 

var totaldiv = document.getElementById('total');
var total = document.getElementById('qtytotal');

// cart 
var cart = document.getElementById('qtycart');
cart.readOnly = true;

// personal details

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var mobile = document.getElementById('mobile');
var card = document.getElementById('card');
var reset = document.getElementById('reset');
var order = document.getElementById('place-order');
var invoice = document.getElementById('invoice');
var bill = document.getElementById('bill');

// Full Total

var price1 = 150;
var price2 = 300;
var price3 = 100;
var price4 = 200;
var price5 = 100;
var price6 = 250;


// nav bar

let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function () {
            sidebar.classList.toggle("active")
        }


// preventing cleaned data on button clicked

document.getElementById('my-form').onsubmit = function(){
    return false;
}


// Validating add cart button

cart1.onclick = function(){
    if (div1.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div1.style.display = 'block';
        totaldiv.style.display = 'block';
        qty1.readOnly = true;
        total.readOnly = true;
    }
}
cart2.onclick = function(){
    if (div2.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div2.style.display = 'block';
        totaldiv.style.display = 'block';
        qty2.readOnly = true;
        total.readOnly = true;
    }
}
cart3.onclick = function(){
    if (div3.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div3.style.display = 'block';
        totaldiv.style.display = 'block';
        qty3.readOnly = true;
        total.readOnly = true;
    }
}
cart4.onclick = function(){
    if (div4.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div4.style.display = 'block';
        totaldiv.style.display = 'block';
        qty4.readOnly = true;
        total.readOnly = true;
    }
}
cart5.onclick = function(){
    if (div5.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div5.style.display = 'block';
        totaldiv.style.display = 'block';
        qty5.readOnly = true;
        total.readOnly = true;
    }
}
cart6.onclick = function(){
    if (div6.style.display == 'block'){
        alert('Item Already Added!');
    }
    else {
        div6.style.display = 'block';
        totaldiv.style.display = 'block';
        qty6.readOnly = true;
        total.readOnly = true;
    }
}

// validating remove cart button

remove1.onclick = function(){

    div1.style.display = 'none';
    totaldiv.style.display = 'none';
    qty1.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div2.style.display == 'block') || (div3.style.display == 'block') || (div4.style.display == 'block') || (div5.style.display == 'block')
        || (div6.style.display == 'block')){
        
        totaldiv.style.display = 'block';
    }
}

remove2.onclick = function(){

    div2.style.display = 'none';
    totaldiv.style.display = 'none';
    qty2.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div1.style.display == 'block') || (div3.style.display == 'block') || (div4.style.display == 'block') || (div5.style.display == 'block')
        || (div6.style.display == 'block')){
        
        totaldiv.style.display = 'block';
    }
}

remove3.onclick = function(){

    div3.style.display = 'none';
    totaldiv.style.display = 'none';
    qty3.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div2.style.display == 'block') || (div1.style.display == 'block') || (div4.style.display == 'block') || (div5.style.display == 'block')
        || (div6.style.display == 'block')){
        
        totaldiv.style.display = 'block';
        }
}

remove4.onclick = function(){

    div4.style.display = 'none';
    totaldiv.style.display = 'none';
    qty4.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div2.style.display == 'block') || (div3.style.display == 'block') || (div1.style.display == 'block') || (div5.style.display == 'block')
        || (div6.style.display == 'block')){
        
        totaldiv.style.display = 'block';
    }
}

remove5.onclick = function(){

    div5.style.display = 'none';
    totaldiv.style.display = 'none';
    qty5.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div2.style.display == 'block') || (div3.style.display == 'block') || (div4.style.display == 'block') || (div1.style.display == 'block')
        || (div6.style.display == 'block')){
        
        totaldiv.style.display = 'block';
    }
}

remove6.onclick = function(){

    div6.style.display = 'none';
    totaldiv.style.display = 'none';
    qty6.value = 0;
    cart.value = parseInt(qty1.value) + parseInt(qty2.value) + parseInt(qty3.value) + parseInt(qty4.value) + parseInt(qty5.value) + parseInt(qty6.value)

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

    if ((div2.style.display == 'block') || (div3.style.display == 'block') || (div4.style.display == 'block') || (div5.style.display == 'block')
        || (div1.style.display == 'block')){
        
        totaldiv.style.display = 'block';
        }
}

// validating operations - item 001

plus1.onclick = function(){
    qty1.value = parseInt(qty1.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

}

minus1.onclick = function(){
    if (qty1.value > 0){
        qty1.value = parseInt(qty1.value) - 1;
        cart.value = parseInt(cart.value) -1;
        
        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}
// validating operations - item 002

plus2.onclick = function(){
    qty2.value = parseInt(qty2.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
}

minus2.onclick = function(){
    if (qty2.value > 0){
        qty2.value = parseInt(qty2.value) - 1;
        cart.value = parseInt(cart.value) -1;

        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}
// validating operations - item 003

plus3.onclick = function(){
    qty3.value = parseInt(qty3.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
}

minus3.onclick = function(){
    if (qty3.value > 0){
        qty3.value = parseInt(qty3.value) - 1;
        cart.value = parseInt(cart.value) -1;

        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}
// validating operations - item 001

plus4.onclick = function(){
    qty4.value = parseInt(qty4.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
}

minus4.onclick = function(){
    if (qty4.value > 0){
        qty4.value = parseInt(qty4.value) - 1;
        cart.value = parseInt(cart.value) -1;

        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}
// validating operations - item 001

plus5.onclick = function(){
    qty5.value = parseInt(qty5.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
}

minus5.onclick = function(){
    if (qty5.value > 0){
        qty5.value = parseInt(qty5.value) - 1;
        cart.value = parseInt(cart.value) -1;

        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}
// validating operations - item 001

plus6.onclick = function(){
    qty6.value = parseInt(qty6.value) + 1;
    cart.value = parseInt(cart.value) +1;

    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
}

minus6.onclick = function(){
    if (qty6.value > 0){
        qty6.value = parseInt(qty6.value) - 1;
        cart.value = parseInt(cart.value) -1;

        total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;
    }
}

// validating Reset button

reset.onclick = function(){
    fname.value = '';
    lname.value = '';
    email.value = '';
    mobile.value = '';
    card.value = '';
    light1.style.background = "gray";
    light1.style.boxShadow = "none";
    light2.style.background = "gray";
    light2.style.boxShadow = "none";
}


// validatinf Place Order button

order.onclick = function(){
    if (total.value > 0){
    var mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var names = /^[a-zA-Z]{3,15}$/;
    var vowels = /[a|e|i|o|u]{1,}/;
    var phone = /^[0-9]{10,12}$/;
    var bank = /^[0-9]{8,16}$/;

    if (fname.value == '' || lname.value == '' || email.value == '' || mobile.value == '' || card.value == ''){
        alert('Some Fields Are Missing, Please Fill All The Details !');
    }
    else if (!names.test(fname.value) || !names.test(lname.value) || fname.value == lname.value || !vowels.test(fname.value) || !vowels.test(lname.value)){
        alert('Invalid Name!(Vowel Missing/Invalid Letters)')
    }
    else if (!mail.test(email.value)){
        alert('invalid email ! \n "@/." Symbols may missed or Invalid Format \n Ex - john123@gmail.com' );
    }
    else if (!phone.test(mobile.value)){
        alert('Invalid Mobile Number! \n Must Contain (10 - 12) Numbers \n Ex - XXXXXXXXXX(10-12)');
    }
    else if (!bank.test(card.value)){
        alert('Invalid Credit Card Number! \n Must Contain (8 - 16) Numbers \n Ex - XXXX-XXXX-XXXX-XXXX(8 -16)');
    }
    else {
        var r = confirm("Are You sure to continue?");
            if (r == true) {
                invoice.style.display = 'flex';
                bill.style.resize = "none"
                bill.readOnly = true;
                document.getElementById('slider-box1').style.display = 'none';
                document.getElementById('slider-box2').style.display = 'none';
                document.getElementById('home-text').innerHTML = 'Thank You For Dealing With Us!';
                document.getElementById('done').style.display = 'block';
                var d = new Date();

                var form = document.getElementById("my-form");
                var elements = form.elements;
                for (var i = 0, len = elements.length; i < len; ++i) {
                elements[i].readOnly = true;
                }

                reset.disabled = true;
                order.disabled = true;
                plus1.disabled = true;
                plus2.disabled = true;
                plus3.disabled = true;
                plus4.disabled = true;
                plus5.disabled = true;
                plus6.disabled = true;
                remove1.disabled = true;
                remove2.disabled = true;
                remove3.disabled = true;
                remove4.disabled = true;
                remove5.disabled = true;
                remove6.disabled = true;
                minus1.disabled = true;
                minus2.disabled = true;
                minus3.disabled = true;
                minus4.disabled = true;
                minus5.disabled = true;
                minus6.disabled = true;
                

                    bill.value = "Name: " + fname.value + " " + lname.value + "\n" + 
                    "Email: " + email.value +  "\n" +
                    "\n" +  d + "\n" +
                    "Invoice Details"  + "\n" +
                    "...........................";

                    if (qty1.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: The Irishman(2019)" + "\n" +
                        " Quantity: " + qty1.value + "\n" +
                        " Price: " + parseInt(qty1.value) * 
                        price1 + "$" + "\n";
                    }
                    if (qty2.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: Avengers Endgame(2019)" + "\n" +
                        " Quantity: " + qty2.value + "\n" +
                        " Price: " + parseInt(qty2.value) * price2  + "$" + "\n";
                    }
                    if (qty3.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: The Martian(2015)" + "\n" +
                        " Quantity: " + qty3.value + "\n" +
                        " Price: " + parseInt(qty3.value) * price3 + "$" + "\n";
                    }
                    if (qty4.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: A Quiet Place Part II(2020)" + "\n" +
                        " Quantity: " + qty4.value + "\n" +
                        " Price: " + parseInt(qty4.value) * price4 + "$" + "\n";
                    }
                    if (qty5.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: 12 Years A Slave(2013)" + "\n" +
                        " Quantity: " + qty5.value + "\n" +
                        " Price: " + parseInt(qty5.value) * price5 + "$" + "\n";
                    }
                    if (qty6.value > 0){
                        bill.value =  bill.value + "\n" + 
                        " Product: Johnny English Strikes Again(2018)" + "\n" +
                        " Quantity: " + qty6.value + "\n" +
                        " Price: " + parseInt(qty6.value) * price6 + "$" + "\n";
                    }

                    total.value = parseInt(qty1.value) * price1 + parseInt(qty2.value) * price2 + parseInt(qty3.value) * price3 + parseInt(qty4.value) * price4 + parseInt(qty5.value) * price5 + parseInt(qty6.value) * price6;

                    bill.value = bill.value + "\n" + "Total Bill: " + parseInt(total.value) + "$";
            }
    }
    
    }

    else {
        alert('CART is empty!');
    }
    
}

var done = document.getElementById("done");

done.onclick = function(){
    window.location.replace("Products.html");
}

// validating light indicators

var light1 = document.getElementById("light1");
var light1 = document.getElementById("light1");
var mail2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var bank2 = /^[0-9]{8,16}$/;
email.oninput = function(){
    if (email.value.length > 0){
        if (email.value.match(mail2)){
        light1.style.background = "#0f0";
        light1.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0";
    }
    else {
        light1.style.background = "red";
        light1.style.boxShadow = "0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 40px red";
        
    }
    }
    else{
        light1.style.background = "gray";
        light1.style.boxShadow = "none";
    }
}

card.oninput = function(){
    if (card.value.length > 0){
        if (card.value.match(bank2)){
        light2.style.background = "#0f0";
        light2.style.boxShadow = "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0";
    }
    else {
        light2.style.background = "red";
        light2.style.boxShadow = "0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 40px red";
        
    }
    }
    else{
        light2.style.background = "gray";
        light2.style.boxShadow = "none";
    }
}

// Setting Background image changing

var image = document.getElementById("back-img");
var images = ["./images/superman.jpg","./images/irishmanb.jpg","./images/ironman.jpg","./images/martianb.jpg","./images/quietp.jpg",
"./images/endgame.png","./images/bat.jpg","./images/fast.jpg"];

setInterval(function(){
    let random = Math.floor(Math.random()* 8);
    image.src = images[random]
}, 3000)