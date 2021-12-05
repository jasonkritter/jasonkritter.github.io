let errors = [];
let activeFacilitators = [
  "Christian",
  "Fazil",
  "Shelby",
  "Ye",
  "Jennifer",
  "Kimberly",
  "Josh"
];

function validateForm() {
  resetErrors();

  let firstNameVal = document.forms["hw4Form"]["firstName"].value;
  let lastNameVal = document.forms["hw4Form"]["lastName"].value;
  let facilitatorVal = document.forms["hw4Form"]["facilitator"].value;
  let livesInUsVal = document.forms["hw4Form"]["livesInUs"].value;

  checkName(firstNameVal, "firstNameError");
  checkName(lastNameVal, "lastNameError");
  checkFacilitator(facilitatorVal, "facilitatorError");
  checkLivesInUs(livesInUsVal, "livesInUsError");

  if (errors.length) {
    generateHtmlErrors();
    return false;
  } else {
    return true;
  }
}

function checkName(nameVal, errorElementId) {
  let letters = /^[A-Za-z]+$/;
  let hasError = false;
  let text;
  if (!nameVal.match(letters)) {
    text = "Name may contain only alphabetic characters";
    hasError = true;
  }
  if (nameVal.length < 2) {
    text = "Name must be at least two characters";
    hasError = true;
  }
  if (!nameVal.length) {
    text = "Field is required";
    hasError = true;
  }
  if (hasError) {
    errors.push({ elementId: errorElementId, errorText: text });
  }
}

function checkFacilitator(facilitatorVal, errorElementId) {
  let hasError = false;
  let text;
  if (!facilitatorVal.length) {
    text = "Field is required";
    hasError = true;
  } else {
    const found = activeFacilitators.find((activeFacilitator) => {
      return activeFacilitator.toLowerCase() === facilitatorVal.toLowerCase();
    });
    if (!found || found == undefined) {
      text = "'" + facilitatorVal + "' is not an active facilitator";
      hasError = true;
    }
  }
  if (hasError) {
    errors.push({ elementId: errorElementId, errorText: text });
  }
}

function checkLivesInUs(livesInUs, errorElementId) {
  let text;
  if (livesInUs == "" || livesInUs == null) {
    text = "Select yes or no";
    errors.push({ elementId: errorElementId, errorText: text });
  }
}

function resetErrors() {
  errors = [];
  let htmlErrors = document.getElementsByClassName("error-text");
  for (var i = 0; i < htmlErrors.length; i++) {
    htmlErrors[i].style.display = "none";
    htmlErrors[i].parentNode.classList.remove("error");
  }
}

function generateHtmlErrors() {
  if (errors.length) {
    errors.forEach((error) => {
      document.getElementById(error.elementId).innerHTML = error.errorText;
      document.getElementById(error.elementId).style.display = "block";
      document
        .getElementById(error.elementId)
        .parentNode.classList.add("error");
    });
  }
}
