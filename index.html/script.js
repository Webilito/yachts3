// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile navigation when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Reviews Slider
const reviewDots = document.querySelectorAll('.review-dots .dot');
const reviewCards = document.querySelectorAll('.review-card');
const reviewsSlider = document.querySelector('.reviews-slider');

reviewDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Update active dot
        reviewDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Scroll to the corresponding review card
        if (reviewCards[index]) {
            reviewsSlider.scrollLeft = reviewCards[index].offsetLeft;
        }
    });
});

// Auto-slide reviews
let currentReviewIndex = 0;

function autoSlideReviews() {
    currentReviewIndex = (currentReviewIndex + 1) % reviewCards.length;
    
    // Update active dot
    reviewDots.forEach(d => d.classList.remove('active'));
    reviewDots[currentReviewIndex].classList.add('active');
    
    // Scroll to the corresponding review card
    reviewsSlider.scrollLeft = reviewCards[currentReviewIndex].offsetLeft;
}

// Set auto-slide interval, but only if there's more than one review
if (reviewCards.length > 1) {
    setInterval(autoSlideReviews, 5000);
}

// Scroll event listener for sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Form validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
            
            // Email validation
            if (input.type === 'email' && input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    isValid = false;
                    input.style.borderColor = 'red';
                }
            }
        });
        
        if (isValid) {
            // In a real application, you would send the form data to a server here
            alert('Message sent successfully! We will contact you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Animations on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .boat-card, .review-card, .about-content > div');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.service-card, .boat-card, .review-card, .about-content > div').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Run animations on page load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Create a directory structure for images
// Note: In a real implementation, you would need to actually create these files
console.log('Remember to create an "images" folder with the following files:');
console.log('- logo.png (Fly Tours logo)');
console.log('- hero.jpg (Background yacht image)');
console.log('- yacht1.jpg, yacht2.jpg, yacht3.jpg (Boat images)');
console.log('- team.jpg (Team or office image)'); 