// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let sbtn = document.getElementById('submit-button');
let cpge = document.getElementById('contact-page');

sbtn.addEventListener('click', function(event) {
    event.preventDefault();


let repmes = document.createElement('p');
repmes.textContent = 'Thank you for your message!';
repmes.style.fontSize = '24px';

cpge.innerHTML = '';
cpge.appendChild(repmes);
});