function highlight(element) {
    element.style.backgroundColor = "#f0f8ff";
}
function reset(element) {
    element.style.backgroundColor = "white";
}
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');
    if (nom === '' || email === '' || message === '') {
        feedback.textContent = 'Veuillez remplir tous les champs.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Merci pour votre message, ' + nom + ' !';
        feedback.style.color = 'green';
        e.target.reset();
    }
});

