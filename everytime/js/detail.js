const vote = document.querySelector(".dt-react-vote");
const voteBtn = document.getElementById("vote-btn");
const scrap = document.querySelector(".react-scrap");
const scrapBtn = document.getElementById("scrap-btn");
const scrapBtnIcon = document.querySelector(".scrap-btn-icon");
const scrapBtnText = document.querySelector(".scrap-btn-text");
const comments = document.querySelector(".comments");
const dtCommentSubmit = document.getElementById("detail-comment-submit");
const dtCommentInput = document.getElementById("detail-comment-input");

function clickVote() {
  vote.textContent = Number(vote.textContent) + 1;
}

function clickScrap() {
  if (scrapBtnText.innerText === "스크랩 취소") {
    scrap.textContent = Number(scrap.textContent) - 1;
    scrapBtnIcon.style.display = "inline";
    scrapBtnText.innerText = "스크랩";
  } else {
    scrap.textContent = Number(scrap.textContent) + 1;
    scrapBtnIcon.style.display = "none";
    scrapBtnText.innerText = "스크랩 취소";
  }
}

function submitDetailComment(e) {
  e.preventDefault();
  const value = dtCommentInput.value;
  if (value) {
    alert(value.trim());
    dtCommentInput.value = "";
  } else {
    alert("내용을 입력해 주세요.");
  }
}

voteBtn.addEventListener("click", clickVote);
scrapBtn.addEventListener("click", clickScrap);
dtCommentSubmit.addEventListener("click", submitDetailComment);

comments.addEventListener("click", (e) => {
  const comComBtn = e.target.closest(".com-com-btn");
  if (comComBtn) {
    const comment = comComBtn.closest(".comment");
    const comComment = comment?.querySelector(".com-comment");
    if (comComment) {
      comComment.classList.remove("hidden");
    }
  }

  const comCommentSubmit = e.target.closest(".com-comment-submit");
  if (comCommentSubmit) {
    e.preventDefault();
    const comment = comCommentSubmit.closest(".comment");
    const comCommentInput = comment?.querySelector(".com-comment-input");
    const value = comCommentInput.value.trim();
    if (value) {
      alert(value);
      comCommentInput.value = "";
    } else {
      alert("내용을 입력해 주세요.");
    }
  }
});

// comments.querySelectorAll(".comment").forEach((comment) => {
//   const comCom = comment.querySelector(".com-com-btn");
//   const comComment = comment.querySelector(".com-comment");
//   const comCommentInput = comment.querySelector(".com-comment-input");
//   const comCommentSubmit = comment.querySelector(".com-comment-submit");

//   comCom.addEventListener("click", () => {
//     comComment.classList.toggle("hidden");
//   });

//   comCommentSubmit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const value = comCommentInput.value;
//     if (value) {
//       alert(value.trim());
//       comCommentInput.value = "";
//     } else {
//       alert("내용을 입력해 주세요.");
//     }
//   });
// });
