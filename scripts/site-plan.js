// Add interactivity to display wireframe sketches dynamically
document.getElementById("viewMobile").addEventListener("click", () => {
    displayWireframe("Mobile wireframe: Compact navigation, hero image, and services stacked vertically.");
  });
  
  document.getElementById("viewDesktop").addEventListener("click", () => {
    displayWireframe("Desktop wireframe: Horizontal navigation, grid layout for services, and footer.");
  });
  
  function displayWireframe(description) {
    const wireframeImage = document.getElementById("wireframeImage");
    wireframeImage.innerHTML = `<p>${description}</p>`;
  }
  