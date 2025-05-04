const name = document.getElementById("name");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const passRe = document.getElementById("password-re");
const signup = document.getElementById("signup");

function checkInputs() {
  const nameInput = name.value.trim();
  const nicknameInput = nickname.value.trim();
  const emailInput = email.value.trim();
  const passInput = pass.value.trim();
  const passReInput = passRe.value.trim();

  if (
    nameInput &&
    nicknameInput &&
    emailInput &&
    passInput.length >= 8 &&
    passInput === passReInput
  ) {
    signup.style.backgroundColor = "var(--main-red)";
  } else {
    signup.style.backgroundColor = "var(--main-darkgray)";
  }
}

name.addEventListener("input", checkInputs);
nickname.addEventListener("input", checkInputs);
email.addEventListener("input", checkInputs);
pass.addEventListener("input", checkInputs);
passRe.addEventListener("input", checkInputs);
