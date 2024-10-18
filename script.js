// TypeScript / JavaScript to generate the resume dynamically
var resumeForm = document.getElementById("resume-form");
var resumeContainer = document.getElementById("resume-container");
// Input fields
var profilePicInput = document.getElementById("profile-pic");
var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone");
var educationField = document.getElementById("education");
var skillsField = document.getElementById("skills");
var experienceField = document.getElementById("experience");
// Display elements for the resume
var displayProfilePic = document.getElementById("display-profile-pic");
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayEducation = document.getElementById("display-education");
var displaySkills = document.getElementById("display-skills");
var displayExperience = document.getElementById("display-experience");
// Function to handle image preview
profilePicInput.addEventListener("change", function (event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayProfilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Set the uploaded image to display in the resume
        };
        reader.readAsDataURL(input.files[0]); // Convert image to base64 and preview
    }
});
// Event listener for form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    // Update the resume with form data
    displayName.textContent = nameField.value;
    displayEmail.textContent = "Email: ".concat(emailField.value);
    displayPhone.textContent = "Phone: ".concat(phoneField.value);
    displayEducation.textContent = educationField.value;
    // Handle skills input: split by comma, and create list items
    var skillsArray = skillsField.value.split(",");
    displaySkills.innerHTML = ""; // Clear the list before adding new skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim(); // Trim to remove extra spaces
        displaySkills.appendChild(li);
    });
    // Update experience
    displayExperience.textContent = experienceField.value;
    // Show the resume container
    resumeContainer.classList.add("active");
    // Hide the form
    resumeForm.style.display = "none";
});
