const questions = document.querySelectorAll(".question")


questions.forEach((question)=>{
    question.addEventListener('click',showAnwer)})



function showAnwer(e){
    const answer = e.target.nextElementSibling
    answer.classList.toggle('answer-active')
    
}
