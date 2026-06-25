// Smooth scroll for navigation and anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Smooth scroll for navigation links (alternative method for page navigation)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if (target === '#home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Comic card interaction
const comicCards = document.querySelectorAll('.comic-card');
comicCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(233, 69, 96, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });

    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'float 0.5s ease-in-out';
        }, 10);
    });
});

// Dynamic hero content update on load
window.addEventListener('load', function() {
    console.log('Tales of Gorakhnath website loaded successfully!');
    
    // Add animation delay stagger effect
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'slideIn 0.8s ease-out';
});

// Scroll animation for featured section
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideIn 0.8s ease-out';
        }
    });
}, observerOptions);

document.querySelectorAll('.comic-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        console.log('Escape key pressed');
    }
});

