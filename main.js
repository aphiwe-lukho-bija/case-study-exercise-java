// Select elements
const loginForm = document.getElementById("login-form");
const username = document.getElementById("uname");
const password = document.getElementById("pwd");

const modal = document.querySelector(".modal");
const modalButton = modal ? modal.querySelector("button[type='button']") : null;

// Hide modal when page loads
if (modal) {
    modal.style.display = "none";
}

// Valid credentials
const validUsername = "admin";
const validPassword = "12345";

function validateLogin() {
    // This function exists to support the inline onclick attribute.
    // Actual validation runs on the form submit event.
    return true;
}

function dismissModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            username.value === validUsername &&
            password.value === validPassword
        ) {
            window.location.href = "index.html";
        } else if (modal) {
            modal.style.display = "flex";
        }
    });
}

// Close modal button
if (modalButton) {
    modalButton.addEventListener("click", dismissModal);
}

// ---------- SIDEBAR TOGGLE (home page) ----------
  const sidebar = document.querySelector(".nav-sidebar");
  const toggleBtn = document.querySelector(".btn-toggle-nav");
  if (sidebar && toggleBtn) {
    const navLinks = sidebar.querySelectorAll("a");
    const sidebarUl = sidebar.querySelector("ul");

    // Initial state: closed
    sidebar.style.width = "50px";
    toggleBtn.style.transform = "rotate(0deg)";
    if (sidebarUl) sidebarUl.style.visibility = "hidden";
    navLinks.forEach((link) => {
      link.style.opacity = "0";
      link.style.transition = "opacity 0.5s ease-in-out";
    });

    let sidebarOpen = false;

    // Function called by inline onclick="toggleNav()"
    window.toggleNav = () => {
      sidebarOpen = !sidebarOpen;
      if (sidebarOpen) {
        sidebar.style.width = "272px";
        toggleBtn.style.transform = "rotate(90deg)";
        if (sidebarUl) sidebarUl.style.visibility = "visible";
        navLinks.forEach((link) => (link.style.opacity = "1"));
      } else {
        sidebar.style.width = "50px";
        toggleBtn.style.transform = "rotate(0deg)";
        if (sidebarUl) sidebarUl.style.visibility = "hidden";
        navLinks.forEach((link) => (link.style.opacity = "0"));
      }
    };
  }