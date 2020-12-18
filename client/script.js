const breakfast = document.querySelector('.breakfastDiv');
const dinner = document.querySelector('.dinnerDiv');

breakfast.addEventListener('click', () => {
    if(breakfast.classList.contains('green')) {
        breakfast.classList.remove('green');
        breakfast.classList.add('red');
    } else {
        breakfast.classList.add('green');
        breakfast.classList.remove('red');
    }
})

dinner.addEventListener('click', () => {
    if(dinner.classList.contains('green')) {
        dinner.classList.remove('green');
        dinner.classList.add('red');
    } else {
        dinner.classList.add('green');
        dinner.classList.remove('red');
    }
})