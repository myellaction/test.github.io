const questions = document.querySelectorAll('.questions__item');

const closeAnswer = (item) => {
    const answer = item.querySelector('.questions__answer');
    const plus = item.querySelector('.questions__plus');
    const minus = item.querySelector('.questions__minus');
    answer.classList.remove('questions__answer-show');
    answer.style.height = '0px';
    plus.classList.remove('questions__hidden-plus');
    minus.classList.remove('questions__show-minus');
}

const closeAnswers = (questions, itemIndex) => {
    questions.forEach((item, index) => {
        if(index !== itemIndex) {
            closeAnswer(item)
        }
    });
}

questions.forEach((item, index) => {
    const header = item.querySelector('.questions__item-header');
    const plus = item.querySelector('.questions__plus');
    const minus = item.querySelector('.questions__minus');
    header.addEventListener('click', () => {
        const answer = item.querySelector('.questions__answer');
        closeAnswers(questions, index);
        if(answer.classList.contains('questions__answer-show')){
            closeAnswer(item);
        } else {
            plus.classList.add('questions__hidden-plus');
            minus.classList.add('questions__show-minus');
            answer.classList.add('questions__answer-show');
            answer.style.height = answer.scrollHeight + 'px';
        }
    });
});