document.getElementById("lipa-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("make-payment").addEventListener("click", function() {
    // Add code here to handle the payment, e.g., sending a request to your server.
    var phoneNumber = document.getElementById("phone-number").value;
    var amount = document.getElementById("amount").value;
    
    // For now, let's just show the entered values.
    alert("Phone Number: " + phoneNumber + "\nAmount: " + amount);
});
