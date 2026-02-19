// Main JavaScript file for personal website

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeData();
    setCurrentYear();
});

// Navigation functionality
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize dynamic content
function initializeData() {
    // Load skills
    loadSkills();
    
    // Load experience
    loadExperience();
    
    // Load projects
    loadProjects();
    
    // Load contact links
    loadContactLinks();
}

// Experience data from resume
function loadExperience() {
    const experience = [
        {
            company: 'Azetta.ai',
            location: 'Berkeley, CA',
            role: 'AI Research Engineer Intern',
            period: 'November 2024 – Current',
            bullets: [
                '   Studied the mathematical foundations of linear attention, understanding how feature map factorization reduces O(L²) complexity to O(L).',
                '   Learned connections between kernel regression, attention mechanisms, and normalized weighted averages in transfer architectures.',
                '   Developed intuition for bias-variance tradeoffs in kernel approximation through quadrature nodes and random feature dimensions.',
                '   Studied advanced kernel methods including positive definite kernels, reproducing kernel Hilbert spaces, and Schoenberg\'s theorem for isotropic kernels on spheres.',
                '   Implemented and optimized kernel regression models using TensorFlow and PyTorch, achieving state-of-the-art performance in various benchmark datasets.'
            ]
        },
        {
            company: 'Popper',
            location: 'Los Angeles, CA',
            role: 'Software Engineer Intern',
            period: 'July 2023 – September 2023',
            bullets: [
                '   Utilized React Native to develop a feature enabling simultaneous capture from both front and rear cameras, resulting in an 86% increase in user interaction.',
                '   Used GitHub for version control and collaborative software development; learned and implemented Jira for project management and agile workflow in a startup.',
                '   Improved app load times by 56% by refactoring code and optimizing usage in React Native.',
                '   Integrated Google Maps into the app to add enhanced functionality.',
                '   Collaborated with cross-functional teams in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives.'
            ]
        },
        {
            company: 'Weekly',
            location: 'Pomona, CA',
            role: 'Software Engineer Intern',
            period: 'September 2022 – December 2022',
            bullets: [
                '   Developed a friend recommendation system using matrix factorization to improve user engagement, leading to a 45% increase in matchmaking.',
                '   Collaborated with a team to build and manage a database using Python, ensuring efficient data storage and retrieval.',
                '   Analyzed user needs to gather, interpret, and leverage data for optimizing user interactions and enhancing overall user experience.'
            ]
        }
    ];

    const container = document.getElementById('experience-list');
    if (!container) return;

    experience.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        const bulletsList = entry.bullets.map(b => `<li>${b}</li>`).join('');
        item.innerHTML = `
            <div class="experience-header">
                <div class="experience-title-row">
                    <h3 class="experience-company">${entry.company}</h3>
                    <span class="experience-period">${entry.period}</span>
                </div>
                <p class="experience-role">${entry.role}</p>
                <p class="experience-location">${entry.location}</p>
            </div>
            <ul class="experience-bullets">${bulletsList}</ul>
        `;
        container.appendChild(item);
    });
}

// Skills data - Update this array with your skills
function loadSkills() {
    const skills = [
        'Python',
        'Machine Learning',
        'TensorFlow',
        'PyTorch',
        'Java',
        'React Native',
        'Recommendation Systems',
        'Database Design',
        'Kernel Methods',
        'Git/GitHub'
    ];

    const skillsList = document.getElementById('skills-list');
    if (skillsList && skills.length > 0) {
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
}

// Projects data - Update this array with your projects
function loadProjects() {
    const projects = [
        {
            title: 'CIFAR-10 CNN Classifier',
            description: 'Deep Learning CNN for CIFAR-10 image classification using PyTorch — achieved 68% test accuracy.',
            github: 'https://github.com/cgolfo/cifar10-cnn-classifier-',
            live: ''
        },
        {
            title: 'CS4210-Final-Project',
            description: '',
            github: 'https://github.com/timhhsieh/CS4210-Final-Project',
            live: ''
        },
        {
            title: 'cs4750App',
            description: 'Created a packing checklist in Android Studios.',
            github: 'https://github.com/cgolfo/cs4750App',
            live: ''
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && projects.length > 0) {
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    } else if (projectsGrid && projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1 / -1;">Projects coming soon!</p>';
    }
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const links = document.createElement('div');
    links.className = 'project-links';
    
    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.textContent = 'GitHub';
        links.appendChild(githubLink);
    }
    
    if (project.live) {
        const liveLink = document.createElement('a');
        liveLink.href = project.live;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.textContent = 'Live Demo';
        links.appendChild(liveLink);
    }
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(links);
    
    return card;
}

// Contact links data - Update this array with your contact information
function loadContactLinks() {
    const contactLinks = [
        { label: 'Email', url: 'mailto:cgolfo2002@gmail.com' },
        { label: 'GitHub', url: 'https://github.com/cgolfo' }
    ];

    const contactLinksContainer = document.getElementById('contact-links');
    if (contactLinksContainer && contactLinks.length > 0) {
        contactLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.label;
            if (link.url.startsWith('http')) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            contactLinksContainer.appendChild(a);
        });
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
