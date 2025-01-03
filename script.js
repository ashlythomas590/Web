function validateform() {
    var name = document.getElementById("name").value.trim();
    var deliveryInstructions = document.getElementById("inst").value.trim();
    var selectedRadio = document.querySelector('input[name="topping"]:checked'); // Correctly reference the "topping" radio group
    var isChecked1 = document.getElementById("check1").checked;
    var isChecked2 = document.getElementById("check2").checked;



    var pattern=/^[A-Za-z]+$/;

    // Validate name
    if (name === "") {
        alert("Name should not be empty.");
        return false;
    } else if(!pattern.test(name)){
        alert("Name should only contain alphabets.");
        return false;

    }
    else if(name.length>15){
        alert("Name should not exeed 15 characters.");
        return false;
    }

    // Validate radio buttons for pizza topping
    if (!selectedRadio) {
        alert("Please select a pizza topping.");
        return false;
    }

    // Validate delivery instructions
    if (deliveryInstructions === "") {
        alert("Delivery instructions should not be empty.");
        return false;
    }

    // Validate at least one checkbox is selected
    if (!isChecked1 && !isChecked2) {
        alert("Please select at least one optional extra.");
        return false;
    }

    // If all validations pass
    return true;
}