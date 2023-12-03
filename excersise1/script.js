function validateForm(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var dob = document.getElementById('dob').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var ageError = document.getElementById('ageError');
    var dobError = document.getElementById('dobError');
    var phoneNumberError = document.getElementById('phoneNumberError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    if (firstName.trim() === "") {
      //firstNameError.textContent = "Please enter your first name.";
      alert("Please enter your first name.")
      event.preventDefault();
    } else {
      firstNameError.textContent = "";
    }

    if (lastName.trim() === "") {
      //lastNameError.textContent = "Please enter your last name.";
      alert("Please enter your last name.")
      event.preventDefault();
    } else {
      lastNameError.textContent = "";
    }

    if (isNaN(age) || age <= 0) {
     // ageError.textContent = "Age must be a positive number.";
      alert("Age must be a positive number")
      event.preventDefault();
    } else {
      ageError.textContent = "";
    }
    
    var phoneNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
     // phoneNumberError.textContent = "Invalid phone number.";
      alert("Invalid phone nuumber.")
      event.preventDefault();
    }else{
      phoneNumberError.textContent="";
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     // emailError.textContent = "Invalid email address.";
     alert("Invalid email address.")
      event.preventDefault();
    } else {
      emailError.textContent = "";
    }

    if (password.length < 6) {
      //passwordError.textContent = "Password must be at least 6 characters.";
      alert("Password must be at least 6 characters.")
      event.preventDefault();
    } else {
      passwordError.textContent = "";
    }
  }