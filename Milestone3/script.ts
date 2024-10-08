// Listing Elements
const resumeform = document.getElementById("resumeform") as HTMLFormElement;
const resumeOutputElement = document.getElementById(
    "resumeOutput"
) as HTMLDivElement | null;

resumeform.addEventListener("submit", function (event) {
    event.preventDefault();

    // Type Assertion for form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    // Handle Profile Picture
    const profilePicture = (document.getElementById("profilePicture") as HTMLInputElement).files?.[0];
    let profilePictureURL = '';

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePictureURL = e.target?.result as string;
            // Now call the function to display the resume including the image
            generateResume(profilePictureURL);
        };
        reader.readAsDataURL(profilePicture);
    } else {
        // If no picture is uploaded, generate resume without the picture
        generateResume();
    }

    function generateResume(profilePic: string = '') {
        // Generate resume content
        const profilePicHTML = profilePic ? `<img src="${profilePic}" alt="Profile Picture" style="width:150px;height:150px;object-fit:cover;border-radius:50%;">` : '';
  

    const resumeOutput = `
      <div style="text-align: center;">
                ${profilePicHTML}
                <h1>${name}</h1>
            </div> 
            <h2>Personal Info </h2>
              <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone #:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
           
          
            <h2>Education</h2>
        <p >${education.split(',').map(item => `<p>${item.trim()}</p>`).join('')}</p>
            <h2>Experience</h2>
            <p>${experience}</p>
            <h2>Skills </h2>
            <p>${skills}</p>
    `;

    // Assign the generated HTML to resumeOutputElement
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error("The Resume Output Element is missing");
    }
}});
