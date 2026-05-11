<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ammar Mahzuz - Web Developer & 3D Animator</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-text">Ammar</span>
                <span class="logo-dot">.</span>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Halo, Saya <span class="highlight">Ammar Mahzuz</span></h1>
            <p class="hero-subtitle">Web Developer & 3D Animator</p>
            <p class="hero-description">
                Mahasiswa Sistem Informasi yang passionate dalam menciptakan pengalaman digital yang inovatif melalui web development dan animasi 3D
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">Lihat Karya Saya</a>
                <a href="#contact" class="btn btn-secondary">Hubungi Saya</a>
            </div>
        </div>
        <div class="hero-animation">
            <div class="floating-box"></div>
            <div class="floating-box floating-box-2"></div>
            <div class="floating-box floating-box-3"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">Tentang Saya</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="about-intro">
                        Saya adalah seorang mahasiswa <strong>Prodi Sistem Informasi</strong> di <strong>Universitas Komputama Cilacap</strong> yang sangat antusias dalam menambah ilmu baru dan mengembangkan skill di bidang teknologi.
                    </p>
                    <p class="about-desc">
                        Dengan passion yang tinggi terhadap <strong>Web Development</strong>, saya telah mengasah kemampuan dalam menciptakan website yang responsif, user-friendly, dan visually appealing. Selain itu, saya juga mendalami <strong>Animasi 3D</strong> menggunakan tools profesional seperti <strong>Maya 3D</strong>, yang memungkinkan saya untuk menciptakan konten visual yang stunning dan interaktif.
                    </p>
                    <p class="about-desc">
                        Kombinasi antara web development dan 3D animation membuat saya mampu menghasilkan karya yang tidak hanya fungsional tetapi juga memiliki dimensi kreatif yang tinggi. Saya selalu siap untuk tantangan baru dan terus berkembang dalam industri digital yang dinamis ini.
                    </p>
                    <div class="about-stats">
                        <div class="stat">
                            <h3>Sistem Informasi</h3>
                            <p>Universitas Komputama</p>
                        </div>
                        <div class="stat">
                            <h3>Web Dev</h3>
                            <p>Passionate Creator</p>
                        </div>
                        <div class="stat">
                            <h3>3D Animation</h3>
                            <p>Maya Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Keahlian Saya</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fab fa-html5"></i>
                    </div>
                    <h3>HTML</h3>
                    <p>Semantic markup & web structure</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <h3>CSS</h3>
                    <p>Modern styling & animations</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fab fa-js"></i>
                    </div>
                    <h3>JavaScript</h3>
                    <p>Interactive & dynamic content</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fab fa-figma"></i>
                    </div>
                    <h3>Figma</h3>
                    <p>UI/UX Design & Prototyping</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h3>Maya 3D</h3>
                    <p>3D Modeling & Animation</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas fa-code-branch"></i>
                    </div>
                    <h3>Git & GitHub</h3>
                    <p>Version control & collaboration</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Proyek Unggulan</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <div class="project-placeholder">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <div class="project-overlay">
                            <a href="https://github.com/ammarmahzuz-web" target="_blank" class="project-link">
                                <i class="fab fa-github"></i> Lihat Kode
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Website Kampus - SIMAK</h3>
                        <p class="project-desc">
                            Website manajemen akademik kampus dengan fitur lengkap untuk administrasi, registrasi, dan tracking akademik. Dibangun dengan HTML, CSS, dan JavaScript untuk performa optimal.
                        </p>
                        <div class="project-tags">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">Responsive</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Hubungi Saya</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Mari Terhubung</h3>
                    <p>Saya terbuka untuk kolaborasi, project baru, dan opportunity yang menarik. Jangan ragu untuk menghubungi saya!</p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:ammarmahzuz@gmail.com">ammarmahzuz@gmail.com</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-github"></i>
                            <div>
                                <h4>GitHub</h4>
                                <a href="https://github.com/ammarmahzuz-web" target="_blank">ammarmahzuz-web</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-instagram"></i>
                            <div>
                                <h4>Instagram</h4>
                                <a href="https://www.instagram.com/rammahr16" target="_blank">@rammahr16</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-youtube"></i>
                            <div>
                                <h4>YouTube</h4>
                                <a href="https://youtube.com/@ammarmahzuz7254" target="_blank">@ammarmahzuz7254</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="social-links">
                    <h3>Follow Me</h3>
                    <div class="social-grid">
                        <a href="https://github.com/ammarmahzuz-web" class="social-button" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.instagram.com/rammahr16" class="social-button" target="_blank">
                            <i class="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://youtube.com/@ammarmahzuz7254" class="social-button" target="_blank">
                            <i class="fab fa-youtube"></i>
                            <span>YouTube</span>
                        </a>
                        <a href="mailto:ammarmahzuz@gmail.com" class="social-button">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 Ammar Mahzuz. All rights reserved.</p>
            <p>Made with <span class="heart">❤</span> using HTML, CSS & JavaScript</p>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scrollTop">
        <i class="fas fa-arrow-up"></i>
    </button>

    <script src="script.js"></script>
</body>
</html>

