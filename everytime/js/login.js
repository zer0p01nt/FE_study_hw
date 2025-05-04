const id = document.getElementById("id");
const pass = document.getElementById("password");
const login = document.getElementById("login");

function checkInputs() {
  const idInput = id.value.trim();
  const passInput = pass.value.trim();

  if (idInput && passInput.length >= 8) {
    login.style.backgroundColor = "var(--main-red)";
  } else {
    login.style.backgroundColor = "var(--main-darkgray)";
  }
}

id.addEventListener("input", checkInputs);
pass.addEventListener("input", checkInputs);
