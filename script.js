// Navigation mobile toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Tarif filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const tarifCategories = document.querySelectorAll('.tarif-category');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        tarifCategories.forEach(category => {
            if (filter === 'all') {
                category.classList.remove('hidden');
                category.style.animation = 'none';
                category.offsetHeight; // Trigger reflow
                category.style.animation = 'fadeIn 0.5s ease';
            } else if (category.dataset.category === filter) {
                category.classList.remove('hidden');
                category.style.animation = 'none';
                category.offsetHeight; // Trigger reflow
                category.style.animation = 'fadeIn 0.5s ease';
            } else {
                category.classList.add('hidden');
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll('.service-card, .tarif-category, .contact-item, .horaires-grid').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = '';
            });
            navLink.style.color = '#b99d71';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Service card click - scroll to corresponding tarif category
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return; // Don't interfere with button clicks

        const category = card.dataset.category;
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);

        if (filterBtn) {
            filterBtn.click();

            // Scroll to tarifs section
            const tarifsSection = document.querySelector('#tarifs');
            const navHeight = navbar.offsetHeight;
            const targetPosition = tarifsSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize - make sure all categories are visible on load
document.addEventListener('DOMContentLoaded', () => {
    tarifCategories.forEach(category => {
        category.classList.remove('hidden');
    });
});
