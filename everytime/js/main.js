const writeBtn = document.getElementById("write-btn");
const writeBox = document.querySelector(".sec-write");
const postBox = document.querySelector(".postbox");
const question = document.getElementById("question");
const qInfo = document.querySelector(".q-info-container");

function showPostBox() {
  writeBox.classList.add("hidden");
  postBox.classList.remove("hidden");
}

function toggleQInfo() {
  qInfo.classList.toggle("hidden");
}

writeBtn.addEventListener("click", showPostBox);
question.addEventListener("change", toggleQInfo);
