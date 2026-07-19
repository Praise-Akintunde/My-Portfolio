
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    const downloadBtn = document.getElementById('download-cv');
    downloadBtn.addEventListener('click', downloadCV);

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.padding = '20px 0';
        }
    });

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

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

function downloadCV() {
    const cvContent = `
AKINTUNDE PRAISE OREOLUWA
Lagos, Nigeria • +2349032100257 • +2349024112227 • akintundepraise003@gmail.com • LinkedIn: Praise Akintunde

PROFESSIONAL SUMMARY
Innovative and tech-driven professional with a passion for full-stack development, UI/UX design, data analysis, and artificial intelligence. Adept at creating user-centric digital experiences by blending design and development skills to build highly functional software applications. Proven ability to apply technical expertise in JavaScript, Node.js, React, Python, and machine learning to solve complex problems. Seeking opportunities to contribute to impactful projects in the tech industry.

EDUCATION & NATIONAL SERVICE
National Youth Service Corps (NYSC) Active Service Year • Expected Completion: 2027
Bachelor of Science in Computer Science and Mathematics (3.54 Second Class Upper)
Crawford University • August 2025

SKILLS
Full-Stack Dev: JavaScript, Node.js, React, Python, HTML, CSS
UI/UX Design: Figma, Wireframing, Prototyping, User Research
Machine Learning & AI: PyTorch, Computer Vision, Neural Networks, Model Training
Databases: SQL, Database Querying, Data Management
Digital Media: CapCut, Filmora, Graphic Design (Canva, Adobe Express), Video Editing
SEO & Web Opt: Keyword Research, On-Page & Technical SEO
Cybersecurity: Network Security Basics, Cyber Threat Management, Penetration Testing

PROFESSIONAL EXPERIENCE
Full-Stack Developer • UI/UX Designer • Graphic Designer • Video Editor
Freelance • Remote • Ongoing
- Designed, built, and deployed a Staff Leave Management System to automate and streamline employee time-off requests and administrative approvals.
- Developed a Smart Queue System to optimize waiting times, improve user flow, and manage crowd distribution efficiently.
- Developed interactive web applications using React, Python, and JavaScript.
- Designed and implemented user-friendly interfaces using Figma and Adobe tools.
- Created AI-powered applications, including "Moodify", a project-focused computer vision tool for mood recognition.
- Delivered high-quality graphic design and video editing projects for diverse clients.

Web Developer • UI/UX Designer
Covenant University (CSIS) • Onsite Internship • June 2024 – November 2024
- Created an official website for Covenant University's accounting department, incorporating technical SEO strategies to maximize digital visibility.
- Developed and managed responsive web applications using HTML, CSS, and JavaScript while monitoring website traffic metrics.
- Collaborated with cross-functional teams to enhance UI/UX layouts, resulting in boosted user engagement.
- Authored instructional and informational blogs and articles for the university platform.

Web Developer • UI/UX Designer
JemisGap • Remote Full-time • June 2024 – November 2024
- Redesigned and maintained the company website to significantly improve responsiveness, performance, and loading speeds.
- Applied advanced technical SEO practices to boost organic search engine visibility and user traffic.
- Enhanced core branding and overall user engagement through tailored interactive design solutions.

Graphic Designer • Video Editor • Photo Editor
NACOS Media Team (Crawford Chapter) • Volunteering • June 2024 – August 2025
- Produced engaging multimedia content for digital campaigns, successfully enhancing the chapter's social media presence.
- Collaborated with the media team to design high-impact promotional assets using the Adobe Creative Suite.
- Managed end-to-end video editing and motion graphics pipelines to maintain strong brand consistency.

LEADERSHIP EXPERIENCE
Team Lead, Website Creation Team
Covenant University • August 2024 – November 2024

Lead Video Editor
NACOS Media Team (Crawford Chapter) • June 2024 – August 2025

CERTIFICATIONS
UI/UX Elementary – PDU (October 2025)
Introduction to Cybersecurity – Cisco Networking Academy (September 2024)
Introduction to SQL – Simplilearn SkillUp (October 2023)
Introduction to C++ – Simplilearn SkillUp (October 2022)
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Akintunde_Praise_Oreoluwa_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
