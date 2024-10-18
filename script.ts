// TypeScript / JavaScript to generate the resume dynamically
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById("resume-container") as HTMLDivElement;

// Input fields
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
const nameField = document.getElementById("name") as HTMLInputElement;
const emailField = document.getElementById("email") as HTMLInputElement;
const phoneField = document.getElementById("phone") as HTMLInputElement;
const educationField = document.getElementById("education") as HTMLTextAreaElement;
const skillsField = document.getElementById("skills") as HTMLTextAreaElement;
const experienceField = document.getElementById("experience") as HTMLTextAreaElement;

// Display elements for the resume
const displayProfilePic = document.getElementById("display-profile-pic") as HTMLImageElement;
const displayName = document.getElementById("display-name") as HTMLHeadingElement;
const displayEmail = document.getElementById("display-email") as HTMLParagraphElement;
const displayPhone = document.getElementById("display-phone") as HTMLParagraphElement;
const displayEducation = document.getElementById("display-education") as HTMLParagraphElement;
const displaySkills = document.getElementById("display-skills") as HTMLUListElement;
const displayExperience = document.getElementById("display-experience") as HTMLParagraphElement;

// Function to handle image preview
profilePicInput.addEventListener("change", (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayProfilePic.src = e.target?.result as string; // Set the uploaded image to display in the resume
        }
        reader.readAsDataURL(input.files[0]); // Convert image to base64 and preview
    }
});

// Event listener for form submission
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form from submitting

    // Update the resume with form data
    displayName.textContent = nameField.value;
    displayEmail.textContent = `Email: ${emailField.value}`;
    displayPhone.textContent = `Phone: ${phoneField.value}`;
    displayEducation.textContent = educationField.value;

    // Handle skills input: split by comma, and create list items
    const skillsArray = skillsField.value.split(",");
    displaySkills.innerHTML = ""; // Clear the list before adding new skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
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
