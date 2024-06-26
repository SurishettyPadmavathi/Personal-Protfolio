// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Handle navigation menu clicks
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Handle form submission
    const contactForm = document.querySelector(".contact form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const fullName = formData.get("Full Name...");
      const email = formData.get("Full Email Id...");
      const mobile = formData.get("Full Mobile No...");
      const address = formData.get("Enter Address...");
  
      console.log("Form Submitted");
      console.log("Name: ", fullName);
      console.log("Email: ", email);
      console.log("Mobile: ", mobile);
      console.log("Address: ", address);
  
      // Display a thank you message or handle form data as needed
      alert("Thank you for getting in touch, " + fullName + "!");
  
      // Clear the form
      contactForm.reset();
    });
  
    // Initialize skill bars
    const skills = document.querySelectorAll(".skill span");
    skills.forEach(skill => {
      const skillWidth = skill.getAttribute("style").split(":")[1];
      skill.style.width = 0;
      setTimeout(() => {
        skill.style.width = skillWidth;
      }, 500);
    });
  
    // Handle progress bars in the skills section
    const progressBars = document.querySelectorAll("[role='progressbar']");
    progressBars.forEach(bar => {
      const valueNow = bar.getAttribute("aria-valuenow");
      bar.style.setProperty('--value', valueNow);
    });
  });