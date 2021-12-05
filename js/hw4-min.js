let errors=[],activeFacilitators=["Christian","Fazil","Shelby","Ye","Jennifer","Kimberly","Josh"];function validateForm(){resetErrors();let e=document.forms.hw4Form.firstName.value,r=document.forms.hw4Form.lastName.value,t=document.forms.hw4Form.facilitator.value,o=document.forms.hw4Form.livesInUs.value;return checkName(e,"firstNameError"),checkName(r,"lastNameError"),checkFacilitator(t,"facilitatorError"),checkLivesInUs(o,"livesInUsError"),!errors.length||(generateHtmlErrors(),!1)}function checkName(e,r){let t,o=!1;e.match(/^[A-Za-z]+$/)||(t="Name may contain only alphabetic characters",o=!0),e.length<2&&(t="Name must be at least two characters",o=!0),e.length||(t="Field is required",o=!0),o&&errors.push({elementId:r,errorText:t})}function checkFacilitator(e,r){let t,o=!1;if(e.length){const r=activeFacilitators.find((r=>r.toLowerCase()===e.toLowerCase()));r&&null!=r||(t="'"+e+"' is not an active facilitator",o=!0)}else t="Field is required",o=!0;o&&errors.push({elementId:r,errorText:t})}function checkLivesInUs(e,r){let t;""!=e&&null!=e||(t="Select yes or no",errors.push({elementId:r,errorText:"Select yes or no"}))}function resetErrors(){errors=[];let e=document.getElementsByClassName("error-text");for(var r=0;r<e.length;r++)e[r].style.display="none",e[r].parentNode.classList.remove("error")}function generateHtmlErrors(){errors.length&&errors.forEach((e=>{document.getElementById(e.elementId).innerHTML=e.errorText,document.getElementById(e.elementId).style.display="block",document.getElementById(e.elementId).parentNode.classList.add("error")}))}