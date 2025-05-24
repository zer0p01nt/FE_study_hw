const id = document.getElementById("id");
const pass = document.getElementById("password");
const login = document.getElementById("login");
const passBtn = document.querySelector(".pass-btn");
const passBtnIcon = document.querySelector(".pass-btn-i");

function checkInputs() {
  const idInput = id.value.trim();
  const passInput = pass.value.trim();

  if (idInput && passInput.length >= 8) {
    login.style.backgroundColor = "var(--main-red)";
  } else {
    login.style.backgroundColor = "var(--main-darkgray)";
  }
}

function togglePassword() {
  if (passBtn.classList.contains("active")) {
    passBtn.classList.remove("active");
    passBtnIcon.classList.replace("fa-eye-slash", "fa-eye");
    pass.type = "password";
  } else {
    passBtn.classList.add("active");
    passBtnIcon.classList.replace("fa-eye", "fa-eye-slash");
    pass.type = "text";
  }
}

id.addEventListener("input", checkInputs);
pass.addEventListener("input", checkInputs);
passBtn.addEventListener("click", (e) => {
  e.preventDefault();
  togglePassword();
});
