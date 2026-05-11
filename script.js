/* ==================== 
   MOBILE MENU TOGGLE 
   ==================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ==================== 
   SMOOTH SCROLL 
   ==================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== 
   SCROLL TO TOP BUTTON 
   ==================== */

const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ==================== 
   SCROLL ANIMATIONS 
   ==================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

/* ==================== 
   ADD FADE IN UP ANIMATION 
   ==================== */

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ==================== 
   NAVBAR ACTIVE LINK 
   ==================== */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==================== 
   COUNTER ANIMATION 
   ==================== */

const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        counter.addEventListener('scroll', () => {
            // Custom counter logic if needed
        });
    });
};

/* ==================== 
   PARALLAX EFFECT 
   ==================== */

const heroSection = document.querySelector('.hero');
const floatingBoxes = document.querySelectorAll('.floating-box');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition < window.innerHeight) {
        floatingBoxes.forEach((box, index) => {
            box.style.transform = `translateY(${scrollPosition * 0.5}px) rotate(${scrollPosition * 0.1}deg)`;
        });
    }
});

/* ==================== 
   ACTIVE NAV LINK STYLING 
   ==================== */

// Add active class styling in CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .nav-link.active {
        color: var(--highlight);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(styleSheet);

/* ==================== 
   PAGE LOAD ANIMATION 
   ==================== */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0.95';

/* ==================== 
   FORM VALIDATION (FOR FUTURE USE) 
   ==================== */

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ==================== 
   KEYBOARD NAVIGATION 
   ==================== */

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ==================== 
   UTILITY FUNCTIONS 
   ==================== */

// Log page load
console.log('%c Welcome to Ammar Mahzuz Portfolio! ', 'background: linear-gradient(135deg, #e94560, #0f3460); color: white; font-size: 14px; padding: 10px; border-radius: 5px;');

// Add loading animation
const preloadAssets = () => {
    // Preload fonts and images if needed
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Preload logic
        });
    }
};

preloadAssets();
