document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
  
    let isValid = true;
  
    if (!email.value.trim()) {
      emailError.textContent = "O email é obrigatório.";
      email.classList.add("error");
      isValid = false;
    } else {
      emailError.textContent = "";
      email.classList.remove("error");
    }
  
    if (!password.value.trim()) {
      passwordError.textContent = "A senha é obrigatória.";
      password.classList.add("error");
      isValid = false;
    } else {
      passwordError.textContent = "";
      password.classList.remove("error");
    }
  
    if (isValid) {
      alert("Login realizado com sucesso!");
    }
  });