document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const userId = document.getElementById("user-id");
    const password = document.getElementById("password");
    const resetBtn = document.querySelector('input[type="reset"]');
  
    if (!form || !userId || !password || !resetBtn) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = userId.value.trim();
      const pass = password.value.trim();
      if (user === "" || pass === "") {
        alert("Please fill in all fields.");
      } else {
        alert("Login successful!");
      }
    });
  
    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmReset = confirm("Forgot password?\nWould you like to reset your credentials?");
      if (confirmReset) {
        alert("Password recovery link has been sent to your registered email.");
      }
    });
  
    [userId, password].forEach(input => {
      input.addEventListener("focus", () => {
        input.style.borderColor = "#007BFF";
      });
      input.addEventListener("blur", () => {
        input.style.borderColor = "#ccc";
      });
    });
  });
  