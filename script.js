console.log("Script.js is loaded!"); // Debug log to confirm script loading

document.addEventListener('DOMContentLoaded', () => {

  // Editable Data (Edit your links, skills, projects, and icons here)
  const editableData = {
    headerLinks: {
      email: "mailto:vmjain2411@gmail.com",
      github: "https://github.com/VJxDawn",
      linkedin: "https://www.linkedin.com/in/vihaan-jain-58113136a/",
      leetcode: "https://leetcode.com/u/VJxDawn/"
    },
    sidebarLinks: {
      about: { url: "#about", icon: '<svg aria-label="About Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4" /><path d="M12 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
      interests: { url: "#interests", icon: '<svg aria-label="Interests Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
      projects: { url: "#projects", icon: '<svg aria-label="Projects Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3zM9 9l6 6m0-6l-6 6"/></svg>' },
      skills: { url: "#skills", icon: '<svg aria-label="Skills Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>' },
      education: { 
        url: "#education", 
        icon: '<svg aria-label="Education Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5h14v12H5c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm7 0v12"/></svg>' 
      },
      timeline: { 
        url: "#timeline", 
        icon: '<svg aria-label="Timeline Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20" stroke-linecap="round"/><circle cx="6" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="18" cy="12" r="2" /></svg>'
      },
      awards: { 
        url: "#awards", 
        icon: '<svg aria-label="Awards Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6h6l-3 6 3 6h-6l-3 6-3-6H3l3-6-3-6h6z"/><circle cx="12" cy="12" r="2"/></svg>' 
      },
      certifications: { 
        url: "#certifications", 
        icon: '<svg aria-label="Certifications Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 8h8m-8 3h8m-8 3h8"/></svg>' 
      },
      experience: { 
        url: "#experience", 
        icon: '<svg aria-label="Experience Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 14H4V8h16v10z"/></svg>' 
      },
      contact: { 
        url: "#contact", 
        icon: '<svg aria-label="Contact Icon" class="sidebar-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 2H4c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6l-2 2V4h16v10z"/></svg>' 
      } 
    },
    projectLinks: {
      portfolio: {
        github: "https://github.com/VJxDawn/portfolio",
        demo: "https://vihaan.dev/portfolio",
        screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPefkgG2Yf8rOnKnQ2wcPPhW-JJOe5vSqJ6g&s",
        description: "A personal portfolio website showcasing my projects and skills.",
        tech: "HTML, CSS, JavaScript"
      },
      aiChatbot: {
        github: "https://github.com/vihaanjain/ai-chatbot",
        demo: "https://vihaan.dev/ai-chatbot-demo",
        screenshot: "https://via.placeholder.com/300x200.png?text=AI+Chatbot+Screenshot",
        description: "An AI-powered chatbot built with Python and NLP libraries.",
        tech: "Python, NLTK, Flask"
      },
      librarySystem: {
        github: "https://github.com/vihaanjain/library-system",
        demo: "https://vihaan.dev/library-system-demo",
        screenshot: "https://via.placeholder.com/300x200.png?text=Library+System+Screenshot",
        description: "A library management system with a user-friendly interface.",
        tech: "React, Node.js, MongoDB"
      }
    },
    contactLinks: {
      github: "https://github.com/VJxDawn",
      cv: "Vihaan_Jain_Resume.pdf",
      email: "mailto:vmjain2411@gmail.com",
      linkedin: "https://www.linkedin.com/in/vihaan-jain-58113136a/"
    },
    techStack: [
      { name: "JavaScript", icon: `
  <svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/>
    <path d="M86.316 107.08c2.316 3.786 5.334 6.565 10.668 6.565 4.488 0 7.34-2.24 7.34-5.334 0-3.712-2.94-5.026-7.866-7.2l-2.7-1.154c-7.806-3.33-12.992-7.514-12.992-16.342 0-8.13 6.19-14.302 15.868-14.302 6.89 0 11.84 2.4 15.394 8.658l-8.412 5.4c-1.85-3.33-3.846-4.638-6.982-4.638-3.18 0-5.2 2.02-5.2 4.638 0 3.25 2.02 4.564 6.684 6.565l2.7 1.15c9.18 3.94 14.368 7.92 14.368 16.922 0 9.7-7.63 15.006-17.876 15.006-10.018 0-16.478-4.786-19.614-11.05l8.586-4.974zM51.166 108.008c1.64 2.894 3.14 5.33 6.684 5.33 3.41 0 5.568-1.34 5.568-6.56V59.93h10.384v46.976c0 10.768-6.312 15.684-15.53 15.684-8.322 0-13.156-4.314-15.628-9.526l8.522-5.048z"/>
  </svg>` },
      { name: "Python", icon: `
  <svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#3776AB" d="M63.458 0C56.076 0 50.6 5.508 50.6 12.934v11.928h25.576v3.982H36.124c-7.384 0-13.346 5.982-13.346 13.35v19.604c0 7.368 5.962 13.35 13.346 13.35h7.5v-9.764c0-7 7.428-6.026 13.35-13.41 13.35h27.652c7.384 0 13.344-5.922 13.344-13.35V13.382C97.03 5.986 91.068 0 83.684 0H63.458zm-14.766 9.882c2.4 0 4.346 1.956 4.346 4.37 0 2.414-1.946 4.366-4.346 4.366s-4.346-1.952-4.346-4.366c0-2.414 1.946-4.37 4.346-4.37z"/>
    <path fill="#FFD43B" d="M64.54 127.992c7.384 0 12.858-5.508 12.858-12.934V103.13H51.822v-3.986h40.05c7.384 0 13.346-5.982 13.346-13.35V66.186c0-7.368-5.962-13.35-13.346-13.35h-7.5v9.764c0 7.428-6.026 13.35-13.41 13.35H42.356c-7.384 0-13.346 5.922-13.346 13.35v28.06c0 5.644 5.962 11.628 13.346 11.628h22.184zm14.77-9.882c-2.4 0-4.346-1.956-4.346-4.37 0-2.414 1.946-4.366 4.346-4.366s4.346 1.952 4.346 4.366c0 2.414-1.946 4.37-4.346 4.37z"/>
  </svg>` },
      { name: "C++", icon: `
  <svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#00599C" d="M64 0l55.43 32v64L64 128 8.57 96V32L64 0z"/>
    <path fill="#FFF" d="M64.02 19.146l39.12 22.68v44.31l-39.12 22.68-39.13-22.68V41.826l39.13-22.68zm-.02 8.094l-30.24 17.52v35.48L64 97.76l30.24-17.52V44.76L64 27.24zm7.91 42.83v-5.65h5.64v-5.65h-5.64v-5.64h-5.65v5.64H60.6v5.65h5.66v5.65h5.65zm13.56 0v-5.65h5.65v-5.65h-5.65v-5.64h-5.65v5.64h-5.64v5.65h5.64v5.65h5.65z"/>
  </svg>` },
      { name: "HTML", icon: `
  <svg class="tech-icon" viewBox="0 0 128 128">
    <path fill="#E44D26" d="M19.603 114.63L8.4 0h111.2l-11.2 114.574-44.4 12.326-44.397-12.27z"/>
    <path fill="#F16529" d="M64 118.253l35.897-10.024 9.574-106.91H64v116.935z"/>
    <path fill="#EBEBEB" d="M64 66.38H46.318l-1.233-13.8H64V39.28H34.83l.321 3.646 3.3 36.96H64v-13.507zm-.06 32.504l-15.5 4.413-1.174-13.093 1.828-.48 11.11-29.588H34.96l1.957 21.94 27.02 7.502.063-.018v-13.123z"/>
    <path fill="#FFF" d="M63.946 66.38V52.58h16.602l1.233-13.8H63.946V25.613h29.17l-.321 3.646-3.3 36.96H63.946zm0 32.504V85.762h15.48l1.174-13.093H63.946V59.243h27.662l-.947 10.623-1.958 21.94-24.757 6.84z"/>
  </svg>` }
    ],
    skillsProgress: [
      { name: "JavaScript", percentage: 85 },
      { name: "Python", percentage: 75 },
      { name: "C++", percentage: 65 },
      { name: "HTML/CSS", percentage: 90 }
    ],
    awards: [
      { title: "10th Boards From CBSE", description: "94.8%age", icon: '<svg class="award-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 9l11 6 11-6-11-7zm0 13.5L3.5 10.5l8.5 5 8.5-5L12 15.5z"/></svg>' },
      { title: "ENGINEERING Entrance Examinations", description: "JEE: 95%ILE, MHT-CET: 99.3%ILE", icon: '<svg class="award-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 9l11 6 11-6-11-7zm0 13.5L3.5 10.5l8.5 5 8.5-5L12 15.5z"/></svg>' },
      { title: "12 Boards From MH Board", description: "80.33%age", icon: '<svg class="award-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 9l11 6 11-6-11-7zm0 13.5L3.5 10.5l8.5 5 8.5-5L12 15.5z"/></svg>' },
      { title: "Coding Skills", description: "Completely self-taught, used free platforms such as YouTube.", icon: '<svg class="award-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 9l11 6 11-6-11-7zm0 13.5L3.5 10.5l8.5 5 8.5-5L12 15.5z"/></svg>' },
      { title: "Verified Discord Bot in 2021", description: "Used in over 2.5k servers, discontinued now.", icon: '<svg class="award-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 9l11 6 11-6-11-7zm0 13.5L3.5 10.5l8.5 5 8.5-5L12 15.5z"/></svg>' }
    ],
    certifications: [
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        year: 2025,
        logo: `<svg aria-label="freeCodeCamp Icon" class="cert-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12 0C5.371 0 0 5.372 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.628-5.371-12-12-12zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm.217-5.879c1.297 0 2.35-1.26 2.35-2.812 0-1.46-.907-2.34-1.76-2.34-.482 0-.861.268-.953.674h-.029c-.07-.266-.241-.497-.496-.681-.553-.396-1.346-.293-1.896.238-.522.505-.822 1.202-.822 1.976 0 1.55 1.053 2.81 2.35 2.81.403 0 .775-.134 1.09-.353h-.03c-.312.134-.65.252-1-.03zm-3.512-4.252c.181-.175.42-.276.676-.276.268 0 .519.109.708.304.204.21.315.498.315.814 0 .313-.112.603-.314.812a1.01 1.01 0 0 1-.709.303 1.04 1.04 0 0 1-.677-.276 1.14 1.14 0 0 1-.317-.812c0-.316.113-.604.318-.81z"/>
  </svg>`
      },
      {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: 2024,
        logo: `<svg aria-label="freeCodeCamp Responsive Web Design Icon" class="cert-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12 0C5.371 0 0 5.372 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.628-5.371-12-12-12zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.5-16h-3v4h-4v3h4v5h3v-5h4v-3h-4v-4zm-1.5 8.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
  </svg>`
      }
    ],
    experiences: [
      { role: "Freelancing", company: "Sharlz-Startup", duration: "April 2022", description: "Developed responsive E-Commerce Clothing Website using React and Node.js." },
      { role: "Freelancing", company: "Creamy-Creation", duration: "June 2025", description: "Developed responsive website for HomeBaker (My Mom) for her bakery." }
    ]
  };

  // Preloader Typing Animation
  const loaderText = document.getElementById('loader-text');
  const textToType = "Hi, I'm Vihaan";
  let i = 0;
  if (loaderText) {
    function typeLoaderText() {
      if (i < textToType.length) {
        loaderText.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeLoaderText, 100);
      }
    }
    typeLoaderText();
  } else {
    console.error("Loader text element not found. Check if 'loader-text' ID exists in the HTML.");
  }

  // Simulated Progress Bar Animation
  const progress = document.getElementById('progress');
  let width = 0;
  if (progress) {
    const progressInterval = setInterval(() => {
      if (width >= 100) {
        clearInterval(progressInterval);
      } else {
        width += 2;
        progress.style.width = `${width}%`;
      }
    }, 50);
  } else {
    console.error("Progress bar element not found. Check if 'progress' ID exists in the HTML.");
  }

  // Hide Preloader After DOM is Loaded (with a minimum display time for UX)
  const preloader = document.getElementById('preloader');
  const minDisplayTime = 1500;
  const startTime = Date.now();

  if (preloader) {
    function hidePreloader() {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
      
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      }, remainingTime);
    }

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 5000);
  } else {
    console.error("Preloader element not found. Check if 'preloader' ID exists in the HTML.");
  }

  // Dynamically Adjust Body Padding Based on Header Height
  function adjustBodyPadding() {
    const header = document.querySelector('header');
    const body = document.body;
    if (header && body) {
      const headerHeight = header.offsetHeight;
      body.style.paddingTop = `${headerHeight}px`;
      console.log(`Header height: ${headerHeight}px, body padding-top set to: ${headerHeight}px`);
    } else {
      console.error("Header or body element not found for adjusting padding.");
    }
  }

  // Run on load and on window resize
  window.addEventListener('load', adjustBodyPadding);
  window.addEventListener('resize', adjustBodyPadding);
  adjustBodyPadding(); // Initial call

  // Helper function to set href safely
  const setHref = (id, href) => {
    const element = document.getElementById(id);
    if (element) {
      element.href = href;
    } else {
      console.error(`Element with ID '${id}' not found for setting href.`);
    }
  };

  // Set Header Links
  setHref('header-email-link', editableData.headerLinks.email);
  setHref('header-github-link', editableData.headerLinks.github);
  setHref('header-linkedin-link', editableData.headerLinks.linkedin);
  setHref('header-leetcode-link', editableData.headerLinks.leetcode);

  // Set Sidebar Links with SVGs and Custom Scroll Behavior
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (sidebarMenu && editableData.sidebarLinks) {
    console.log("Sidebar menu found, generating links...");
    sidebarMenu.innerHTML = ''; // Clear existing content
    Object.keys(editableData.sidebarLinks).forEach((key, index) => {
      const linkData = editableData.sidebarLinks[key];
      const li = document.createElement('li');
      li.style.setProperty('--i', index + 1);
      li.innerHTML = `
        <a id="sidebar-${key}-link" href="${linkData.url}" data-section="${key}">
          ${linkData.icon}
          <span>${key.charAt(0).toUpperCase() + key.slice(1)}</span>
        </a>
      `;
      sidebarMenu.appendChild(li);
      console.log(`Appended sidebar item: ${key}`); // Debug log for each item

      // Force repaint with staggered delay
      setTimeout(() => {
        li.classList.add('force-render');
        // Ensure SVG renders correctly by forcing a reflow
        const svg = li.querySelector('svg');
        if (svg) {
          svg.style.display = 'none';
          svg.offsetHeight; // Trigger reflow
          svg.style.display = 'inline-block';
        }
      }, 50 * (index + 1));

      void li.offsetWidth;

      // Add custom scroll behavior to sidebar links
      const link = li.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = 120; // Increased offset to prevent overlap
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          console.error(`Target element with ID '${targetId}' not found for smooth scroll.`);
        }
      });
    });
  } else {
    console.error("Sidebar menu not found. Check if 'sidebar-menu' ID exists in the HTML.");
  }

  // Set Contact Links
  setHref('contact-github-link', editableData.contactLinks.github);
  setHref('contact-cv-link', editableData.contactLinks.cv);
  setHref('contact-email-link', editableData.contactLinks.email);
  setHref('contact-linkedin-link', editableData.contactLinks.linkedin);

  // Generate Project Cards with Lazy Loading, Tech Tags, and Demo Links
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && editableData.projectLinks) {
    const projectGrid = document.createElement('div');
    projectGrid.className = 'project-grid';
    Object.keys(editableData.projectLinks).forEach(key => {
      const project = editableData.projectLinks[key];
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.screenshot}" alt="${key} screenshot" class="project-screenshot" loading="lazy">
        <h3>${key.charAt(0).toUpperCase() + key.slice(1)}</h3>
        <p>${project.description}</p>
        <p class="project-tech">Tech: ${project.tech}</p>
        <div class="project-links">
          <a href="${project.github}" id="project-${key}-github-link" class="project-link">GitHub</a>
          <a href="${project.demo}" id="project-${key}-demo-link" class="project-link">Live Demo</a>
        </div>
      `;
      projectGrid.appendChild(projectCard);
    });
    projectsContainer.appendChild(projectGrid);
  } else {
    console.error("Projects container not found or project links missing.");
  }

  // Generate Tech Stack Icons
  const techStackContainer = document.getElementById('tech-stack');
  if (techStackContainer && editableData.techStack) {
    const techList = document.createElement('div');
    techList.className = 'tech-stack-grid';
    editableData.techStack.forEach(tech => {
      const techItem = document.createElement('div');
      techItem.className = 'tech-stack-item';
      techItem.innerHTML = `
        ${tech.icon}
        <span>${tech.name}</span>
      `;
      techList.appendChild(techItem);
    });
    techStackContainer.appendChild(techList);
  } else {
    console.error("Tech stack container not found or tech stack data missing.");
  }

  // Generate Skills Progress Bars
  const skillsContainer = document.getElementById('skills-progress-container');
  if (skillsContainer && editableData.skillsProgress) {
    editableData.skillsProgress.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.className = 'skill-progress-item';
      skillDiv.innerHTML = `
        <label>${skill.name}</label>
        <div class="progress-bar">
          <div class="progress" style="width: 0%;" data-percentage="${skill.percentage}"></div>
        </div>
      `;
      skillsContainer.appendChild(skillDiv);
    });
  } else {
    console.error("Skills progress container not found or skills data missing.");
  }

  // Generate Awards & Achievements
  const awardsContainer = document.getElementById('awards-container');
  if (awardsContainer && editableData.awards) {
    const awardList = document.createElement('ul');
    editableData.awards.forEach(award => {
      const awardItem = document.createElement('li');
      awardItem.innerHTML = `
        ${award.icon}
        <span><strong>${award.title}</strong> - ${award.description}</span>
      `;
      awardList.appendChild(awardItem);
    });
    awardsContainer.appendChild(awardList);
  } else {
    console.error("Awards container not found or awards data missing.");
  }

  // Generate Certifications with Logos
  const certificationsContainer = document.getElementById('certifications-container');
  if (certificationsContainer && editableData.certifications) {
    const certList = document.createElement('ul');
    editableData.certifications.forEach(cert => {
      const certItem = document.createElement('li');
      certItem.innerHTML = `
        ${cert.logo}
        <span><strong>${cert.name}</strong> - ${cert.issuer} (${cert.year})</span>
      `;
      certList.appendChild(certItem);
    });
    certificationsContainer.appendChild(certList);
  } else {
    console.error("Certifications container not found or certifications data missing.");
  }

  // Generate Experiences
  const experiencesContainer = document.getElementById('experiences-container');
  if (experiencesContainer && editableData.experiences) {
    const expList = document.createElement('ul');
    editableData.experiences.forEach(exp => {
      const expItem = document.createElement('li');
      expItem.innerHTML = `
        <strong>${exp.role}</strong> - ${exp.company} (${exp.duration})<br>
        ${exp.description}
      `;
      expList.appendChild(expItem);
    });
    experiencesContainer.appendChild(expList);
  } else {
    console.error("Experiences container not found or experiences data missing.");
  }

  // Sidebar Toggle Functionality
  const navIconElement = document.getElementById('navIcon');
  if (navIconElement) {
    navIconElement.addEventListener('click', toggleSidebar);
  } else {
    console.error("Nav icon element not found. Check if 'navIcon' ID exists in the HTML.");
  }

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('mainContainer');
    const navIcon = document.getElementById('navIcon');

    if (!sidebar || !container || !navIcon) {
      console.error("Sidebar, container, or navIcon not found.");
      return;
    }

    // Ensure sidebar content is rendered before toggling
    setTimeout(() => {
      console.log("Toggling sidebar...");
      sidebar.classList.toggle('open');
      container.classList.toggle('shifted');
      navIcon.textContent = sidebar.classList.contains('open') ? '×' : '☰';
    }, 100); // Delay to ensure rendering on mobile
  }

  // Dark Mode Toggle Functionality
  const modeBtnElement = document.getElementById('modeBtn');
  if (modeBtnElement) {
    modeBtnElement.addEventListener('click', toggleMode);
  } else {
    console.error("Mode button element not found. Check if 'modeBtn' ID exists in the HTML.");
  }

  function toggleMode() {
    document.body.classList.toggle('dark');
    const modeBtn = document.getElementById('modeBtn');
    if (modeBtn) {
      const darkMode = document.body.classList.contains('dark');
      modeBtn.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
    }
  }

  // Typing Animation for Header Title (Initial Load Only)
  const titleElement = document.getElementById('header-title');
  const defaultTitle = "Vihaan's Portfolio";
  let typingTimeout = null;

  if (titleElement) {
    function typeText(text, callback) {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
      }

      titleElement.textContent = '';
      let j = 0;
      function type() {
        if (j < text.length) {
          titleElement.textContent += text.charAt(j);
          j++;
          typingTimeout = setTimeout(type, 100);
        } else {
          typingTimeout = null;
          if (callback) callback();
        }
      }
      type();
    }

    // Initial typing animation
    typeText(defaultTitle);
  } else {
    console.error("Header title element not found. Check if 'header-title' ID exists in the HTML.");
  }

  // Update Header Title Based on Current Section
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  let lastVisibleSection = null;
  let lastDisplayedTitle = defaultTitle;

  const highlightActiveSection = () => {
    const viewportTop = window.scrollY + 100;

    let currentSection = null;
    let maxSectionTop = -Infinity;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (sectionTop <= viewportTop && viewportTop < sectionBottom) {
        if (sectionTop > maxSectionTop) {
          maxSectionTop = sectionTop;
          currentSection = section.getAttribute('id');
        }
      }
    });

    const aboutSection = document.getElementById('about');
    const aboutTop = aboutSection ? (aboutSection.getBoundingClientRect().top + window.scrollY - 100) : 0;
    if (viewportTop < aboutTop) {
      if (lastVisibleSection !== null) {
        lastVisibleSection = null;
        if (lastDisplayedTitle !== defaultTitle && titleElement) {
          typeText(defaultTitle);
          lastDisplayedTitle = defaultTitle;
        }
        sidebarLinks.forEach(link => link.classList.remove('active'));
      }
      return;
    }

    if (currentSection && currentSection !== lastVisibleSection) {
      lastVisibleSection = currentSection;
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
          const sectionName = link.getAttribute('data-section');
          const newTitle = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
          if (lastDisplayedTitle !== newTitle && titleElement) {
            typeText(newTitle);
            lastDisplayedTitle = newTitle;
          }
        }
      });
    }
  };

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection();

  const observerOptions = { threshold: 0.1 };
  const sectionObserver = new IntersectionObserver((entries) => {
    let isAnySectionVisible = entries.some(entry => entry.isIntersecting);
    if (!isAnySectionVisible && window.scrollY < 50) {
      if (lastVisibleSection !== null) {
        lastVisibleSection = null;
        if (lastDisplayedTitle !== defaultTitle) {
          typeText(defaultTitle);
          lastDisplayedTitle = defaultTitle;
        }
        sidebarLinks.forEach(link => link.classList.remove('active'));
      }
    }
  }, observerOptions);
  sections.forEach(section => sectionObserver.observe(section));

  // Progress Bar Animation on Scroll
  const progressBars = document.querySelectorAll('.progress');
  const animateProgressBars = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = `${percentage}%`;
        observer.unobserve(bar);
      }
    });
  };
  const progressObserver = new IntersectionObserver(animateProgressBars, { threshold: 0.1 });
  progressBars.forEach(bar => progressObserver.observe(bar));

  // Section Animation on Scroll
  const animateSections = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const sectionAnimationObserver = new IntersectionObserver(animateSections, { threshold: 0.1 });
  sections.forEach(section => sectionAnimationObserver.observe(section));

  // Tap Event for Mobile Devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    const tappableElements = document.querySelectorAll('.header-links-right svg, .toggle-mode, .nav-button, .sidebar a, .buttons a, .project-card, .project-link, .container, section');
    tappableElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.classList.add('tapped');
      });
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.classList.remove('tapped');
        }, 300);
      });
    });
  }
});