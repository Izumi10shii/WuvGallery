// Sidebar 

const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

const collapsedSidebarHeight = "56px";

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
})

const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` :
    collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
})

// Click Me
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = '1'; // Fade-in effect
    }, 10); // Delay to allow the display property to take effect
  }

  function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0'; // Fade-out effect
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300); // Delay to match the fade-out transition duration
  }

  $(window).on("load", function() {
    setTimeout(function() {
        $(".loader-wrapper").fadeOut("slow"); // Fades out smoothly after 2 seconds
    }, 500);
});
