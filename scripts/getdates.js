// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Get the document's last modified date and display it in the footer
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;