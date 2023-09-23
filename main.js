// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // You can add your form submission logic here, like sending data to a server or displaying a thank you message.
    alert('Form submitted!');
});

// Vue.js for handling user inputs
const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // You can access form data in the "this" object and perform further actions like validation or sending data to a server.
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Message:', this.message);
        }
    }
});

app.mount('#contact-form');
