function validation() { /*funtion for validating the inputs for the query form*/
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    var text;

    errorMessage.style.padding = "10px";

    if (name.length < 5) {
        text = "please enter valid name";
        errorMessage.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "please enter valid phone number";
        errorMessage.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 6) {
        text = "please enter valid email";
        errorMessage.innerHTML = text;
        return false;
    }

    if (message.length <= 50) {
        text = "please enter more than 50 characters";
        errorMessage.innerHTML = text;
        return false;
    }

    checkInputs();

    return false;
}

function checkInputs() { /*function for assigning the validated inputs to the input review div for the user to review */
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var text;

    document.getElementById("wrapper").style.display = "none";
    document.getElementById("checkResults").style.display = "block";


    document.getElementById("finalName").innerHTML = name;
    document.getElementById("finalSubject").innerHTML = subject;
    document.getElementById("finalPhone").innerHTML = phone;
    document.getElementById("finalEmail").innerHTML = email;
    document.getElementById("finalMessage").innerHTML = message;


}

function editResults() { /*funtion for the edit query button for the review page*/
    var errorMessage = document.getElementById("errorMessage");

    errorMessage.style.padding = "0px";
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("checkResults").style.display = "none";
}

function sendResults() { /*function for the submit query button after user reviews their inputs*/
    alert("form submission successful");
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.value = "";
    errorMessage.style.padding = "0px";
    document.getElementById("myform").reset();
    document.getElementById("myform").reset();
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("checkResults").style.display = "none";
    return true;
}