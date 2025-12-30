function validateForm(event) {
  // Prevent the default form submission immediately
  event.preventDefault(); 

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  let isValid = true;
  let feedbackMessage = "Form Validation Summary:\n";

  // --- Validate Username ---
  if (username === "") {
    feedbackMessage += "* Name: FAILED (cannot be empty)\n";
    isValid = false;
  } else {
    feedbackMessage += "* Name: OK\n";
  }

  // --- Validate Email ---
  // A more comprehensive check is needed for production, but this demonstrates the concept
  if (email === "") {
    feedbackMessage += "* Email: FAILED (cannot be empty)\n";
    isValid = false;
  } else if (!email.includes("@")) {
    feedbackMessage += "* Email: FAILED (must contain @ symbol)\n";
    isValid = false;
  } else {
    feedbackMessage += "* Email: OK\n";
  }

  // --- Provide Feedback via alert() ---
  if (isValid) {
    alert("✅ SUCCESS! All fields are valid.\n" + feedbackMessage + "\nForm would now submit.");
    // If you wanted to submit the form, you would call:
    // event.target.submit();
  } else {
    alert("❌ VALIDATION FAILED! Please fix the errors.\n" + feedbackMessage);
  }

  // Returning the final state to the onsubmit event handler
  return isValid;
}