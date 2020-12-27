const breakfast = document.querySelector('.breakfastDiv');
const dinner = document.querySelector('.dinnerDiv');

let breakfastFlag = JSON.parse(localStorage.getItem('breakfastFlag')) || false
let dinnerFlag = JSON.parse(localStorage.getItem('dinnerFlag')) || false

if (breakfastFlag === true) {
    breakfast.classList.remove('red');
    breakfast.classList.add('green');
}

if (dinnerFlag === true) {
    dinner.classList.remove('red');
    dinner.classList.add('green');
}


breakfast.addEventListener('click', () => {
    if(breakfast.classList.contains('green')) {
        breakfast.classList.remove('green');
        breakfast.classList.add('red');
        localStorage.setItem('breakfastFlag', JSON.stringify(false));
    } else {
        breakfast.classList.add('green');
        breakfast.classList.remove('red');
        localStorage.setItem('breakfastFlag', JSON.stringify(true));
    }
})

dinner.addEventListener('click', () => {
    if(dinner.classList.contains('green')) {
        dinner.classList.remove('green');
        dinner.classList.add('red');
        localStorage.setItem('dinnerFlag', JSON.stringify(false));
    } else {
        dinner.classList.add('green');
        dinner.classList.remove('red');
        localStorage.setItem('dinnerFlag', JSON.stringify(true));
    }
})

const d = new Date;


if(JSON.parse(localStorage.getItem('dayLastOpened')) !== d.getDate()) {
    breakfast.classList.remove('green');
    breakfast.classList.add('red');
    dinner.classList.remove('green');
    dinner.classList.add('red');
}

let dayLastOpened = d.getDate();
localStorage.setItem('dayLastOpened', JSON.stringify(dayLastOpened));

setInterval(() => {
    if(d.getHours() === 23) {
        breakfast.classList.remove('green');
        breakfast.classList.add('red');
        dinner.classList.remove('green');
        dinner.classList.add('red');
    }
}, 2000)