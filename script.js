const questions = document.querySelectorAll(".question")
questions.forEach((qustion)=>{
    qustion.addEventListener('click',function(){
        this.classList.toggle("active")
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
    })
})