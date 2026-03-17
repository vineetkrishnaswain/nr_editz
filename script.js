document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = 
    "Form submitted! RN Editz will contact you soon.";
  this.reset();
});