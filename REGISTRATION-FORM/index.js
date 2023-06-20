
document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let image = document.getElementById("image").value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let skillsArray = Array.from(skills).map(function(skill) {
    return skill.value;
    });

    // Display entered data
    let userDataElement = document.getElementById("userData");
    let userDataHTML =
      `<h3>Registered User Details:</h3>
      <hr>
      <div style='display:flex;;align-items:center;'>
      <div>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Skills:</strong> ${skillsArray.join(", ")}</p>
      <p><strong>Image Link:</strong></p>
      <p style='word-break: break-all;'>${image}</p>
      </div><div>
      <img src='${image}' alt='User Image' width='150'>
      </div></div>
      `;

      userDataElement.innerHTML += userDataHTML;
      localStorage.setItem("userdata" , userDataHTML)
    // Clear form fields
    document.getElementById("enrollmentForm").reset();
  });


  document.addEventListener("DOMContentLoaded", function() {
    let userDataElement = document.getElementById("userData");
    let storedUserData = localStorage.getItem("userdata");
    if (storedUserData) {
      userDataElement.innerHTML += storedUserData;
    }
  });

    document.getElementById("delbtn").addEventListener('click', function() {
      // Clear user data 
      let userDataElement = document.getElementById("userData");
      userDataElement.innerHTML = "";
      localStorage.removeItem("userdata");
    });