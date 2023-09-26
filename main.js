// main.js

const About = { template: '<div><h1>About Me</h1><p>Hello, I\'m Jijin Cherian Jose, a passionate IT student in Geelong. I am in my 1st year completing my Bachelor\'s Degree in Information Technology.</p><p>In my free time, I enjoy listening to music, watching films and series on Netflix, and learning the basics of coding. I\'m always eager to learn new technologies and tools.</p></div>' };
const Portfolio = { template: '<div><h1>Portfolio</h1><div class="project"><h2>Project 1: Task 1.1P</h2><p>Description: Created a restaurant website.</p><p>Skills Used: I have used some skills in HTML code and added a CSS style for the website.</p></div><div class="project"><h2>Project 2: Task 1.2P</h2><p>Description: Created a website for Responsive Web Apps.</p><p>Skills Used: I have used some skills in HTML code and added a CSS style and JavaScript also in the website.</p></div></div>' };
const Skills = { template: '<div><h1>Skills</h1><ul><li>Web Development (HTML, CSS, JavaScript)</li><li>Frontend Frameworks (Vue.js, React)</li><li>Database Management (SQL)</li></ul></div>' };
const Contact = {
    template: `
        <div>
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch or collaborate on a project, feel free to reach out:</p>
            <form @submit.prevent="submitForm">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    `,
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here (e.g., send data to a server)
            alert('Form submitted!');
        }
    }
};

const routes = [
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/skills', component: Skills },
    { path: '/contact', component: Contact },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
