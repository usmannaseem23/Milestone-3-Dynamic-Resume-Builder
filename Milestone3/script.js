// Listing Elements
var resumeform = document.getElementById("resumeform");
var resumeOutputElement = document.getElementById("resumeOutput");
resumeform.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type Assertion for form values
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    // Handle Profile Picture
    var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = '';
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Now call the function to display the resume including the image
            generateResume(profilePictureURL);
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        // If no picture is uploaded, generate resume without the picture
        generateResume();
    }
    function generateResume(profilePic) {
        if (profilePic === void 0) { profilePic = ''; }
        // Generate resume content
        var profilePicHTML = profilePic ? "<img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" style=\"width:150px;height:150px;object-fit:cover;border-radius:50%;\">") : '';
        var resumeOutput = "\n      <div style=\"text-align: center;\">\n                ".concat(profilePicHTML, "\n                <h1>").concat(name, "</h1>\n            </div> \n            <h2>Personal Info </h2>\n              <p><strong>Email:</strong> ").concat(email, "</p>\n               <p><strong>Phone #:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n           \n          \n            <h2>Education</h2>\n        <p >").concat(education.split(',').map(function (item) { return "<p>".concat(item.trim(), "</p>"); }).join(''), "</p>\n            <h2>Experience</h2>\n            <p>").concat(experience, "</p>\n            <h2>Skills </h2>\n            <p>").concat(skills, "</p>\n    ");
        // Assign the generated HTML to resumeOutputElement
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume Output Element is missing");
        }
    }
});
