const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

btnYes.addEventListener("click", () =>{
  question.innerHTML = "YAAAAAYY !!! here flowers po u <3";
  gif.src = "https://i.pinimg.com/originals/40/a3/92/40a392b38bc8791b5a43873f5c40b60c.gif";
});

BtnNo.addEventListener("click", () => {
    const noBtnRect = noBtn.getBoundingCLientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * MaxY);

    BtnNo.style.left = randomX + "px";
    BtnNo.style.top = randomY + "px";
}); 


