document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_n69bngm', 'template_a3g8rlt', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
});
