// Smooth scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about, .work, .contact');
    sections.forEach(section => observer.observe(section));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for floating cards
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.floating-card');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        // Contact Form Handler
        const contactForm = document.getElementById('contactForm');
        const showFormBtn = document.getElementById('showFormBtn');
        const formContainer = document.getElementById('formContainer');
        const hideFormBtn = document.getElementById('hideFormBtn');

        if (showFormBtn && formContainer) {
            showFormBtn.addEventListener('click', () => {
                formContainer.style.display = 'block';
                showFormBtn.style.display = 'none';
                formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        if (hideFormBtn && formContainer && showFormBtn) {
            hideFormBtn.addEventListener('click', () => {
                formContainer.style.display = 'none';
                showFormBtn.style.display = 'flex';
                // Scroll back to title/button area
                showFormBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                const email = "lilian.pesenti@etu.umontpellier.fr";

                // Create mailto link
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

                // Open email client
                window.location.href = mailtoLink;
            });
        }
        cards.forEach((card, index) => {
            const speed = (index + 1) * 10;
            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});
