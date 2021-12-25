const questions = document.querySelectorAll(".question")
console.log(questions)

questions.forEach((question)=>{
    question.addEventListener('click',(question)=>{
        console.log("hello")
    })
})
