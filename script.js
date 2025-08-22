// Smooth scrolling for navigation links
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

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    const navLogo = document.querySelector('.nav-logo');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.color = '#333';
        // Fechar/ocultar menu mobile totalmente ao descer
        navMenu.classList.remove('active');
        navMenu.style.opacity = '0';
        navMenu.style.visibility = 'hidden';
        navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
        // Esconder botão hambúrguer em mobile durante scroll para baixo
        if (window.innerWidth <= 768 && hamburger) {
            hamburger.style.opacity = '0';
            hamburger.style.pointerEvents = 'none';
        }
        // Centralizar logo quando desce
        navContainer.style.justifyContent = 'center';
        navContainer.style.transition = 'justify-content 0.3s ease';
        // Forçar centralização absoluta
        navLogo.style.position = 'absolute';
        navLogo.style.left = '50%';
        navLogo.style.transform = 'translateX(-50%)';
        navLogo.style.transition = 'all 0.3s ease';
        // Alterar cor dos links para escuro quando navbar fica branco
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#333';
        });
        navLogo.style.color = '#333';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.color = '#e2e8f0';
        // Reexibir menu/hambúrguer quando volta ao topo
        navMenu.style.opacity = '1';
        navMenu.style.visibility = 'visible';
        navMenu.style.display = '';
        if (window.innerWidth <= 768 && hamburger) {
            hamburger.style.opacity = '';
            hamburger.style.pointerEvents = '';
        }
        // Voltar logo para posição original (esquerda)
        navContainer.style.justifyContent = 'space-between';
        navContainer.style.transition = 'justify-content 0.3s ease';
        // Resetar posicionamento absoluto
        navLogo.style.position = 'static';
        navLogo.style.left = 'auto';
        navLogo.style.transform = 'none';
        navLogo.style.transition = 'all 0.3s ease';
        // Voltar cor original dos links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#e2e8f0';
        });
        navLogo.style.color = '#60a5fa';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Modal functionality
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Project demo functions
function openProject(projectType) {
    let content = '';
    
    if (projectType === 'vigilancia') {
        content = `
            <div class="project-demo">
                <h2>Sistema de Vigilância</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-video"></i></div>
                            <div>
                                <div class="showcase-title">Sistema de Vigilância Inteligente</div>
                                <div class="showcase-subtitle">Detecção de Movimento e Monitoramento</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description">
                                <p>Sistema de vigilância com detecção de movimento e captura de vídeo via webcam. Interface desenvolvida com Python e OpenCV para monitoramento em tempo real.</p>
                                <p style="color:#f59e0b; margin-top:1rem; text-align:center; background-color:rgba(245,158,11,0.1); padding: 0.5rem; border-radius: 8px;">
                                    <i class="fas fa-wrench"></i> Projeto em desenvolvimento...
                                </p>
                            </div>
                            <div class="project-gallery">
                                <h4 style="color: #f1f5f9; margin-bottom: 1rem;">Screenshots Atuais</h4>
                                <div class="gallery-grid" id="vigilanciaGallery">
                                    <div class="gallery-item" onclick="openLightboxVigilancia('inicialcamera.jpg')">
                                        <img src="assets/vigilancia/inicialcamera.jpg" alt="Tela Inicial da Câmera">
                                        <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
                                    </div>
                                    <div class="gallery-item" onclick="openLightboxVigilancia('dadossalvo.jpg')">
                                        <img src="assets/vigilancia/dadossalvo.jpg" alt="Confirmação de Dados Salvos">
                                        <div class="gallery-overlay"><i class="fas fa-expand"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } 
    
    else if (projectType === 'sentinelvision') {
        content = `
            <div class="project-demo">
                <h2>Projeto Sentinel</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon"><i class="fas fa-user-shield"></i></div>
                            <div>
                                <div class="showcase-title">Sistema de Reconhecimento Facial</div>
                                <div class="showcase-subtitle">Autenticação e Controle de Acesso</div>
                            </div>
                        </div>
                        <div class="showcase-content">
                            <div class="showcase-description">
                                <p>Sistema completo de reconhecimento facial desenvolvido com Python, Flask e SQLAlchemy. Implementa autenticação biométrica, persistência de dados e controle de acesso seguro.</p>
                                <div class="showcase-stats">
                                    <div class="stat-item"><span class="stat-number">98.5%</span><span class="stat-label">Precisão</span></div>
                                    <div class="stat-item"><span class="stat-number">8+</span><span class="stat-label">Telas</span></div>
                                    <div class="stat-item"><span class="stat-number">5</span><span class="stat-label">Perfis</span></div>
                                    <div class="stat-item"><span class="stat-number">Flask</span><span class="stat-label">Framework</span></div>
                                </div>
                            </div>
                            <div class="project-gallery">
                                <h4 style="color: #f1f5f9; margin-bottom: 1rem;">Screenshots do Sistema</h4>
                                <div class="gallery-grid" id="sentinelGallery">
                                    <div class="gallery-item" onclick="openLightbox('dashboard.2.jpg')"><img src="assets/sentinel/dashboard.2.jpg" alt="Dashboard de Análise"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('bancoDeDados.jpg')"><img src="assets/sentinel/bancoDeDados.jpg" alt="Banco de Dados de Perfis"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('dashboard1.jpg')"><img src="assets/sentinel/dashboard1.jpg" alt="Dashboard de Inteligência"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('menu.jpg')"><img src="assets/sentinel/menu.jpg" alt="Menu Principal"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('minhaConta.jpg')"><img src="assets/sentinel/minhaConta.jpg" alt="Gerenciamento de Conta"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('reconhecimentoAnalisado.jpg')"><img src="assets/sentinel/reconhecimentoAnalisado.jpg" alt="Dossiê do Indivíduo"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('analise.facial.jpg')"><img src="assets/sentinel/analise.facial.jpg" alt="Análise Facial em Tempo Real"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                    <div class="gallery-item" onclick="openLightbox('usuariosAtivos.jpg')"><img src="assets/sentinel/usuariosAtivos.jpg" alt="Usuários Ativos no Sistema"><div class="gallery-overlay"><i class="fas fa-expand"></i></div></div>
                                </div>
                                <div class="demo-video-block">
                                    <div class="video-title" style="margin-bottom: 0.5rem;">Demonstração Completa</div>
                                    <div class="video-container">
                                        <video class="video-player" controls poster="assets/sentinel/dashboard1.jpg">
                                            <source src="assets/sentinel/videocompleto.mp4" type="video/mp4">
                                            Seu navegador não suporta vídeos HTML5.
                                        </video>
                                    </div>
                                    <div class="video-controls">
                                        <button class="play-btn" onclick="playVideo(this)">▶ Play</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } 
    
    // ==================================================================
    // INÍCIO DA SEÇÃO RESTAURADA: PROJETO FURIA
    // ==================================================================
    else if (projectType === 'furia') {
        content = `
            <div class="project-demo">
                <h2>FURIA - Know Your Fan</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon">
                                <i class="fas fa-gamepad"></i>
                            </div>
                            <div>
                                <div class="showcase-title">Plataforma de Validação de Fãs</div>
                                <div class="showcase-subtitle">Aplicação Fullstack para E-sports</div>
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding: 3rem 0;">
                            <div style="font-size: 4rem; color: #60a5fa; margin-bottom: 1rem;">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <p style="color: #cbd5e1; font-size: 1.1rem; margin-bottom: 2rem;">
                                Aplicação fullstack desenvolvida para coleta e validação de dados de fãs da FURIA, 
                                incluindo autenticação, análise de redes sociais e dashboard completo.
                            </p>
                            
                            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">Express</span>
                                <span class="tech-tag">MySQL</span>
                                <span class="tech-tag">CSS Modular</span>
                            </div>
                            
                            <a href="https://github.com/davifeels/furia-know-your-fan" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                                <i class="fab fa-github"></i>
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } 
    // ==================================================================
    // INÍCIO DA SEÇÃO RESTAURADA: PROJETO CHATBOT
    // ==================================================================
    else if (projectType === 'chatbot') {
        content = `
            <div class="project-demo">
                <h2>Chatbot FURIA</h2>
                <div class="demo-container">
                    <div class="project-showcase">
                        <div class="showcase-header">
                            <div class="showcase-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div>
                                <div class="showcase-title">Página Interativa dos Jogadores</div>
                                <div class="showcase-subtitle">Chatbots Personalizados</div>
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding: 3rem 0;">
                            <div style="font-size: 4rem; color: #60a5fa; margin-bottom: 1rem;">
                                <i class="fas fa-robot"></i>
                            </div>
                            <p style="color: #cbd5e1; font-size: 1.1rem; margin-bottom: 2rem;">
                                Página web interativa com perfis personalizados dos jogadores da FURIA e chatbot 
                                individual para cada um, com design responsivo e experiência focada no fã.
                            </p>
                            
                            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin: 2rem 0;">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Responsive</span>
                            </div>
                            
                            <a href="https://github.com/davifeels/chatbotfuria" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                                <i class="fab fa-github"></i>
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function viewCode(projectType) {
    let repoUrl = '';
    if (projectType === 'vigilancia') { repoUrl = 'https://github.com/davifeels/Sistema-De-Vigilancia'; } 
    else if (projectType === 'sentinelvision') { repoUrl = 'https://github.com/davifeels/ProjetoSentinel'; } 
    else if (projectType === 'furia') { repoUrl = 'https://github.com/davifeels/furia-know-your-fan'; } 
    else if (projectType === 'chatbot') { repoUrl = 'https://github.com/davifeels/chatbotfuria'; }
    window.open(repoUrl, '_blank');
}

// Contact form submission (somente se existir)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            submitBtn.style.background = '#10b981';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                e.target.reset();
            }, 2000);
        }, 1500);
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        typeWriter(heroTitle, text, 50);
    }
});

// Parallax effect for floating cards - responsivo e otimizado
let parallaxEnabled = null;
let isScrolling = false;

// LIMPAR ESTILOS INLINE DOS CARDS
function clearInlineStyles() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        card.style.removeProperty('--parallaxY');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
        card.style.removeProperty('transform');
    });
}

function applyParallax() {
    // Parallax desabilitado para focar na animação
    return;
}

function forceCardsVisible() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        card.style.removeProperty('--parallaxY');
        card.style.removeProperty('transform');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
        card.style.visibility = 'visible';
        card.style.display = 'flex';
    });
}

function setParallaxMode() {
    const isDesktop = window.innerWidth >= 769;
    const isLandscape = window.innerWidth > window.innerHeight;
    
    // Habilita parallax apenas em desktop ou tablets em landscape
    const shouldEnableParallax = isDesktop || (window.innerWidth >= 768 && isLandscape);
    
    if (parallaxEnabled === shouldEnableParallax) return;
    
    parallaxEnabled = shouldEnableParallax;
    const cards = document.querySelectorAll('.floating-card');
    
    if (!parallaxEnabled) {
        // Reset para mobile/portrait - zera apenas a contribuição do parallax
        cards.forEach((card) => {
            card.style.setProperty('--parallaxY', '0px');
        });
    } else {
        applyParallax();
    }
}

// Event listeners otimizados
window.addEventListener('scroll', forceCardsVisible, { passive: true });
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(setParallaxMode, 100);
});
window.addEventListener('orientationchange', () => {
    setTimeout(setParallaxMode, 200); // Aguarda orientação estabilizar
});
window.addEventListener('load', () => {
    clearInlineStyles();
});

document.addEventListener('DOMContentLoaded', () => {
    clearInlineStyles();
});

// Lightbox functionality
let galleryImages = [];

const sentinelGalleryImages = [
    { src: 'dashboard.2.jpg', caption: 'Dashboard de Análise' },
    { src: 'bancoDeDados.jpg', caption: 'Banco de Dados de Perfis' },
    { src: 'dashboard1.jpg', caption: 'Dashboard de Inteligência' },
    { src: 'menu.jpg', caption: 'Menu Principal' },
    { src: 'minhaConta.jpg', caption: 'Gerenciamento de Conta' },
    { src: 'reconhecimentoAnalisado.jpg', caption: 'Dossiê do Indivíduo' },
    { src: 'analise.facial.jpg', caption: 'Análise Facial em Tempo Real' },
    { src: 'usuariosAtivos.jpg', caption: 'Usuários Ativos no Sistema' }
];

const vigilanciaGalleryImages = [
    { src: 'inicialcamera.jpg', caption: 'Tela Inicial da Câmera' },
    { src: 'dadossalvo.jpg', caption: 'Confirmação de Dados Salvos' }
];

function updateLightbox() {
    const image = galleryImages[currentImageIndex];
    if (!image) return;

    const folder = (galleryImages === sentinelGalleryImages) ? 'sentinel' : 'vigilancia';
    document.getElementById('lightboxImage').src = `assets/${folder}/${image.src}`;
    document.getElementById('lightboxCaption').textContent = image.caption;
}

function openLightbox(imageSrc) {
    galleryImages = sentinelGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    document.getElementById('lightbox').style.display = 'block';
    updateLightbox();
}

function openLightboxVigilancia(imageSrc) {
    galleryImages = vigilanciaGalleryImages;
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    document.getElementById('lightbox').style.display = 'block';
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightbox();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
}

// Video player functionality
function playVideo(button) {
    // Suporta novo layout (.demo-video-block) e mantém compatibilidade
    const block = button.closest('.demo-video-block') || button.closest('.video-container');
    if (!block) return;
    const video = block.querySelector('video');
    if (!video) return;
    if (video.paused) {
        video.play();
        button.textContent = '⏸ Pause';
    } else {
        video.pause();
        button.textContent = '▶ Play';
    }
}

// Close lightbox when clicking outside
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});
