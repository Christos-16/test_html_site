document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Αποφυγή κανονικής υποβολής

    // Ανάκτηση τιμών από τα πεδία
    const name = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Έλεγχος email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Έλεγχοι για κενά πεδία και μορφή email
    if (!name) {
        alert('Please enter your full name.');
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // Απόκρυψη φόρμας και εμφάνιση μηνύματος
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Επαναφόρτωση της σελίδας μετά από 5 δευτερόλεπτα
    setTimeout(function() {
        location.reload();
    }, 5000);
});
