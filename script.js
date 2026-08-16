/**
 * THE CREATION LAB - Main Configuration
 * Update these variables to control core website functionality.
 */
const CONFIG = {
    phone: "0793769835",
    email: "thecreationlab@gmail.com",
    socials: {
        instagram: "https://www.instagram.com/thecreati0nlab/",
        facebook: "#",
        youtube: "#",
        tiktok: "#",
        linkedin: "#"
    }
};

/**
 * DATA - Services
 */
const SERVICES_DATA = [
    { id: "graphic", icon: "G", title: "GRAPHIC DESIGN", desc: "Logo Design, Brand Identity, Posters, Social Media Design, Advertising Design.", deliverables: ["Logo Design", "Posters", "Social Assets"], examples: ["Brand Launch"] },
    { id: "branding", icon: "B", title: "BRANDING", desc: "Brand Strategy, Visual Identity, Brand Guidelines, Campaign Design.", deliverables: ["Visual Strategy", "Guidelines"], examples: ["Identity Systems"] },
    { id: "video", icon: "V", title: "VIDEO / PHOTO EDITING", desc: "Video Editing, Short-form Content, Photo Retouching, Color Correction.", deliverables: ["Editing", "Correction"], examples: ["Promos"] },
    { id: "motion", icon: "M", title: "MOTION GRAPHICS", desc: "Animated Branding, Social Media Motion, Titles, Visual Effects.", deliverables: ["Motion Logo", "Explainer"], examples: ["Social Reels"] },
    { id: "music", icon: "S", title: "MUSIC PRODUCTION", desc: "Beat Production, Music Production, Audio Editing, Mixing, Sound Design.", deliverables: ["Beats", "Mixing"], examples: ["Scores"] },
    { id: "direction", icon: "C", title: "CREATIVE DIRECTION", desc: "Creative Concepts, Campaign Direction, Visual Strategy, Content Direction.", deliverables: ["Concepts", "Strategy"], examples: ["Campaigns"] }
];

/**
 * DATA - Portfolio (Placeholders for real work)
 */
const PORTFOLIO_DATA = [
    { id: 1, title: "Project A", category: "branding", type: "BRANDING", desc: "A strong identity system built for a growing startup. [PLACEHOLDER - Replace with real project]", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"], year: "2024", services: ["Strategy", "Visual Identity"] },
    { id: 2, title: "Project B", category: "graphic", type: "GRAPHIC DESIGN", desc: "High-impact social media campaign assets. [PLACEHOLDER - Replace with real work]", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"] },
    { id: 3, title: "Project C", category: "video", type: "VIDEO", desc: "Energetic promotional film. [PLACEHOLDER - Replace with real work]", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"] },
    { id: 4, title: "Project D", category: "motion", type: "MOTION", desc: "Animated brand sequences for digital moments. [PLACEHOLDER]", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"] },
    { id: 5, title: "Project E", category: "music", type: "MUSIC", desc: "Original sound design supporting cinematic branding. [PLACEHOLDER]", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"] },
    { id: 6, title: "Project F", category: "graphic", type: "GRAPHIC", desc: "Bold editorial visual language. [PLACEHOLDER]", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80", media: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80"] }
];

// -- DOM ELEMENTS --
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const revealItems = document.querySelectorAll('.reveal');
const sectionLinks = document.querySelectorAll('.main-nav a');
const pageSections = document.querySelectorAll('main section[id]');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalDescription = document.getElementById('modalDescription');
const modalMeta = document.getElementById('modalMeta');
const modalVisual = document.querySelector('.modal-visual');
const modalExternal = document.getElementById('modalExternalLink');
const yearNode = document.getElementById('year');

// -- LOADING SCREEN --
window.addEventListener('load', () => {
    document.getElementById('loading-screen').classList.add('loaded');
});

// -- FOOTER YEAR --
if (yearNode) yearNode.textContent = new Date().getFullYear();

// -- HEADER SCROLL --
const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

// -- MOBILE NAV --
if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    sectionLinks.forEach(link => link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }));
}

// -- ACTIVE NAV LINK --
const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 180;
    let currentId = 'home';
    pageSections.forEach(section => {
        if (section.offsetTop <= scrollPosition) currentId = section.getAttribute('id');
    });
    sectionLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentId}`);
    });
};
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// -- INTERSECTION OBSERVER (Reveal Animations) --
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealItems.forEach(item => revealObserver.observe(item));

// -- PROCESS ANIMATION --
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.55 });
processSteps.forEach(step => processObserver.observe(step));

// -- BUILD SERVICES --
const servicesGrid = document.getElementById('servicesGrid');
SERVICES_DATA.forEach(s => {
    const card = document.createElement('article');
    card.className = 'service-card reveal';
    card.innerHTML = `
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <div class="service-body"><p>${s.desc}</p></div>
    `;
    servicesGrid.appendChild(card);
});

// -- BUILD SOCIALS IN FOOTER --
const footerSocial = document.getElementById('footerSocial');
Object.entries(CONFIG.socials).forEach(([key, url]) => {
    if (url && url !== '#') {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        footerSocial.appendChild(a);
    }
});

// -- BUILD PORTFOLIO & SELECTED WORK --
const portfolioGrid = document.getElementById('portfolioGrid');
const selectedGrid = document.getElementById('selectedGrid');

const createProjectCard = (data, isFeatured = false) => {
    const card = document.createElement('article');
    card.className = isFeatured ? 'featured-card reveal' : 'project-card reveal';
    card.dataset.category = data.category;
    card.dataset.title = data.title;
    card.dataset.type = data.type;
    card.dataset.desc = data.desc;
    card.dataset.media = JSON.stringify(data.media);
    card.dataset.services = JSON.stringify(data.services || []);
    card.dataset.year = data.year || '2024';
    
    if (!isFeatured) card.classList.add('project-item');
    
    card.innerHTML = `
        <div class="project-image" style="background-image: url('${data.img}');"></div>
        <div class="project-meta">
            <span>${data.type}</span>
            <h3>${data.title}</h3>
        </div>
    `;
    card.addEventListener('click', () => openModal(card));
    return card;
};

// Populate Full Portfolio
PORTFOLIO_DATA.forEach(p => portfolioGrid.appendChild(createProjectCard(p, false)));

// Populate Selected Work (First 4)
PORTFOLIO_DATA.slice(0, 4).forEach(p => selectedGrid.appendChild(createProjectCard(p, true)));

// -- PORTFOLIO FILTERS --
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
        
        document.querySelectorAll('.project-item').forEach(card => {
            const shouldShow = filterValue === 'all' || card.dataset.category === filterValue;
            card.classList.toggle('hidden', !shouldShow);
        });
    });
});

// -- MODAL FUNCTIONS --
const openModal = (card) => {
    if (!modal || !card) return;
    const title = card.dataset.title || 'Project';
    const type = card.dataset.type || 'Creative';
    const desc = card.dataset.desc || 'Project details.';
    const media = JSON.parse(card.dataset.media || '[]');
    const services = JSON.parse(card.dataset.services || '[]');
    const year = card.dataset.year || '2024';

    modalTitle.textContent = title;
    modalType.textContent = type;
    modalDescription.textContent = desc;
    modalMeta.innerHTML = services.map(s => `<span>${s}</span>`).join('') + `<span>${year}</span>`;

    const imgUrl = media.length ? media[0] : card.querySelector('.project-image')?.style.backgroundImage?.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    modalVisual.style.backgroundImage = `url('${imgUrl}')`;
    
    // Hide external link by default
    modalExternal.style.display = 'none';

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

// Modal Events
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) closeModal();
});

// -- CONTACT FORM LOGIC --
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');
const channelBtns = document.querySelectorAll('.contact-channel');

const getSelectedChannel = () => document.querySelector('.contact-channel.is-selected')?.dataset.channel || 'whatsapp';

const setSelectedChannel = (nextBtn) => {
    channelBtns.forEach(btn => {
        const selected = btn === nextBtn;
        btn.classList.toggle('is-selected', selected);
        btn.setAttribute('aria-selected', String(selected));
        btn.tabIndex = selected ? 0 : -1;
    });
};

channelBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => setSelectedChannel(btn));

    btn.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;

        event.preventDefault();
        let nextIndex = index;

        if (event.key === 'ArrowRight') nextIndex = (index + 1) % channelBtns.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + channelBtns.length) % channelBtns.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = channelBtns.length - 1;

        const nextBtn = channelBtns[nextIndex];
        setSelectedChannel(nextBtn);
        nextBtn.focus();
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Honeypot check
        if (contactForm.querySelector('input[name="website"]').value) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Spam detection triggered.';
            return;
        }

        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const service = contactForm.querySelector('select[name="service"]').value;
        const details = contactForm.querySelector('textarea[name="details"]').value.trim();
        const phone = contactForm.querySelector('input[name="phone"]').value.trim();
        const budget = contactForm.querySelector('select[name="budget"]').value;
        const source = contactForm.querySelector('select[name="source"]').value;

        // Simple Validation
        if (!name || !email || !service || !details) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please fill in all required fields.';
            return;
        }

        // Visual Loading State
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING...';
        formStatus.className = 'form-status loading';
        formStatus.textContent = 'Preparing your message...';

        // Simulate short delay for UX
        setTimeout(() => {
            // Construct WhatsApp Message
            const message = `Hello The Creation Lab,\n\nI'd like to start a project.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || 'N/A'}\n*Service:* ${service}\n*Budget:* ${budget || 'To be discussed'}\n*Source:* ${source || 'N/A'}\n\n*Project details:*\n${details}\n\nThank you.`;

            // Detect selection and redirect
            const selected = getSelectedChannel();
            const encodedMsg = encodeURIComponent(message);

            let url = '';
            switch (selected) {
                case 'whatsapp':
                    url = `https://wa.me/${CONFIG.phone}?text=${encodedMsg}`;
                    break;
                case 'instagram':
                    url = CONFIG.socials.instagram;
                    break;
                case 'gmail':
                    url = `mailto:${CONFIG.email}?subject=New%20Project%20Inquiry&body=${encodedMsg}`;
                    break;
                case 'call':
                    url = `tel:${CONFIG.phone}`;
                    break;
                default:
                    url = `https://wa.me/${CONFIG.phone}?text=${encodedMsg}`;
                    break;
            }

            // Success State
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Redirecting you to your preferred contact channel...';

            // Reset Form & Redirect
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'START THE CONVERSATION';

            window.open(url, '_blank', 'noopener,noreferrer');
        }, 1000);
    });
}
