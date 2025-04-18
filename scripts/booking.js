/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let rate = 35;
let days = 0;

btns = document.querySelectorAll('.day-selector li');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
    btn.classList.toggle('clicked');
    if (btn.classList.contains('clicked')) {
        days++;
        btn.style.backgroundColor = '#E5AF42'
    } else {
        days--;
        btn.style.backgroundColor = '';
    }
    calculate();
  });
});

let cbutton = document.getElementById('clear-button')
cbutton.addEventListener('click', function() {
    days = 0;
    btns.forEach(function(button) {
        button.classList.remove('clicked');
        button.style.backgroundColor ='';
    })
    calculate();
})

cost = document.getElementById('calculated-cost')
function calculate() {
    totalCost = days * rate;
    cost.innerHTML = totalCost;
}

let half = document.getElementById('half')
let full = document.getElementById('full')

half.addEventListener('click', function() {
    rate = 20;
    half.classList.add('clicked');
    half.style.backgroundColor = '#E5AF42';
    full.classList.remove('clicked');
    full.style.backgroundColor = '';
    calculate()
})

full.addEventListener('click', function() {
    rate = 35;
    full.classList.add('clicked');
    full.style.backgroundColor = '#E5AF42';
    half.classList.remove('clicked');
    half.style.backgroundColor = '';
    calculate()
})
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


