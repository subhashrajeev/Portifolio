// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SCROLL REVEAL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in classes
const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
fadeElements.forEach(element => {
    observer.observe(element);
});

// Observe tech cards with stagger effect
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.05}s`;
    observer.observe(card);
});

// Observe project cards with stagger effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== TECH CARD INTERACTIVE EFFECTS =====
techCards.forEach(card => {
    // Add particle effect on hover
    card.addEventListener('mouseenter', (e) => {
        createParticles(e.currentTarget);
    });

    // Add tilt effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// Create floating particles effect
function createParticles(element) {
    const particles = 5;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899'];

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';

        const rect = element.getBoundingClientRect();
        particle.style.left = rect.left + Math.random() * rect.width + 'px';
        particle.style.top = rect.top + Math.random() * rect.height + 'px';

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let opacity = 1;
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);

        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
        const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
        const message = formData.get('message') || e.target.querySelector('textarea').value;

        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Message Sent! ✓';
        button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        button.disabled = true;

        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 3000);

        console.log('Form submitted:', { name, email, message });
    });
}

// ===== CURSOR TRAIL EFFECT =====
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    // Only add cursor trail on desktop
    if (window.innerWidth > 768) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// ===== TYPING EFFECT FOR HERO SUBTITLE =====
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// ===== STATS COUNTER ANIMATION =====
const statItems = document.querySelectorAll('.stat-item h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const number = parseInt(finalValue);

            if (!isNaN(number)) {
                let current = 0;
                const increment = number / 50;
                const suffix = finalValue.replace(/[0-9]/g, '');

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = number + suffix;
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
            }

            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(stat => statsObserver.observe(stat));

// ===== TECH CARD TOOLTIP =====
techCards.forEach(card => {
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.background = 'rgba(15, 23, 42, 0.95)';
    tooltip.style.color = '#f8fafc';
    tooltip.style.padding = '0.5rem 1rem';
    tooltip.style.borderRadius = '8px';
    tooltip.style.fontSize = '0.9rem';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.3s ease';
    tooltip.style.zIndex = '1001';
    tooltip.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    tooltip.textContent = card.getAttribute('data-tech');

    document.body.appendChild(tooltip);

    card.addEventListener('mouseenter', (e) => {
        tooltip.style.opacity = '1';
    });

    card.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.clientX + 15 + 'px';
        tooltip.style.top = e.clientY + 15 + 'px';
    });

    card.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Add rainbow animation to all tech cards
    techCards.forEach(card => {
        card.style.animation = 'rainbow 2s linear infinite';
    });

    // Add CSS for rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Show message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the easter egg! 🎉';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)';
    message.style.color = 'white';
    message.style.padding = '2rem 3rem';
    message.style.borderRadius = '20px';
    message.style.fontSize = '2rem';
    message.style.zIndex = '10000';
    message.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
    message.style.animation = 'fadeInUp 0.5s ease-out';

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';

    const loader = document.createElement('div');
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.background = '#0f172a';
    loader.style.display = 'flex';
    loader.style.alignItems = 'center';
    loader.style.justifyContent = 'center';
    loader.style.zIndex = '10000';
    loader.style.transition = 'opacity 0.5s ease-out';
    loader.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 60px; height: 60px; border: 5px solid rgba(99, 102, 241, 0.3); border-top-color: #6366f1; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            <p style="color: #f8fafc; margin-top: 1rem; font-size: 1.2rem;">Loading Portfolio...</p>
        </div>
    `;

    document.body.prepend(loader);

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
            document.body.style.overflow = '';
        }, 500);
    }, 1500);
});

console.log('%c✨ Welcome to my Portfolio! ✨', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');
console.log('%cTry the Konami Code! ↑↑↓↓←→←→BA', 'color: #ec4899; font-size: 12px;');
