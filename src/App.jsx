import "./App.css";

const skills = [
  {
    name: "Python",
    category: "Programming",
    icon: "Py",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "Dj",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "Re",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "JS",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    icon: "</>",
  },
  {
    name: "SQL / MySQL",
    category: "Database",
    icon: "DB",
  },
  {
    name: "Pandas",
    category: "Data Science",
    icon: "Pd",
  },
  {
    name: "NumPy",
    category: "Data Science",
    icon: "Np",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: "Git",
  },
];

const experiences = [
  {
    year: "2026",
    company: "Dhee Coding Lab",
    role: "Python Full Stack Trainee",
    description:
      "Worked on Python Full Stack development using Python, Django, HTML, CSS, JavaScript and SQLite3. Built database-driven applications while gaining practical experience in backend and frontend development.",
    tags: [
      "Python",
      "Django",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    year: "3 Months",
    company: "DLithe Consultancy Services Pvt. Ltd.",
    role: "Data Science & Machine Learning Intern",
    description:
      "Gained practical exposure to Data Science and Machine Learning using Python, along with data analysis and machine learning concepts through internship work.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Science",
      "Machine Learning",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Student Management System",
    type: "Full Stack Web Application",
    description:
      "A Django-based student management platform designed to manage student information, attendance, marks and profiles through a responsive web interface.",
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    features: [
      "Student registration & login",
      "Attendance and marks management",
      "Profile management",
      "CRUD operations",
    ],
    github:
      "https://github.com/PavitraVaidya/Student_Management_System",
  },
  {
    number: "02",
    title: "E-Commerce Website",
    type: "Full Stack Web Application",
    description:
      "A complete e-commerce application built with Django featuring authentication, products, shopping cart, orders, checkout and inventory management.",
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    features: [
      "User authentication",
      "Product listing & management",
      "Shopping cart",
      "Orders and checkout",
    ],
    github:
      "https://github.com/PavitraVaidya/E-Commerce-Website",
  },
];

const certifications = [
  {
    title: "Data Science and Analytics",
    organization: "HP",
  },
  {
    title: "Python for Data Science, AI & Development",
    organization: "IBM",
  },
  {
    title: "Understanding the Basics of SQL",
    organization: "Coursera",
  },
  {
    title: "Explore Machine Learning Using Python",
    organization: "Infosys Springboard",
  },
  {
    title: "Programming with Python",
    organization: "Internshala Trainings",
  },
  {
    title: "Python for Data Analysis: Pandas and NumPy",
    organization: "Coursera",
  },
];

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="nav-logo">
          <span>P</span>ortfolio
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>

        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk
          <span>↗</span>
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-bg-circle circle-one"></div>
        <div className="hero-bg-circle circle-two"></div>

        <div className="hero-content">

          <div className="hero-intro">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="hero-small">
  HELLO, I'M
</p>

<h1 className="hero-name">
  Pavitra <span>Vaidya</span>
</h1>

<div className="hero-role">
  <div className="moving-text">
    Python Full Stack Developer
  </div>
</div>

<p className="hero-text">
  I enjoy turning ideas into practical web applications and solving
  problems through clean, simple and effective code. I work with Python,
  Django, React, JavaScript and SQL, and I'm continuously improving my
  problem-solving and DSA skills by building projects and solving coding
  challenges.
</p>
          <div className="hero-actions">

            <a href="#projects" className="btn-primary">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">
              View Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/PavitraVaidya"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pavitra-vaidya/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Pavitra_sv/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-image-area">

          <div className="image-orbit orbit-one"></div>
          <div className="image-orbit orbit-two"></div>

          <div className="image-glow"></div>

          <div className="image-frame">

           <img src="/Portfolio/profile.jpg" />

          </div>

          <div className="floating-tech tech-one">
            <span>PY</span>
            Python
          </div>

          <div className="floating-tech tech-two">
            <span>DJ</span>
            Django
          </div>

          <div className="floating-tech tech-three">
            <span>RE</span>
            React
          </div>

          <div className="code-decoration">
            <span>&lt;</span>
            code
            <span>/&gt;</span>
          </div>

        </div>

      </section>


      {/* ================= MARQUEE ================= */}

      <div className="marquee">

        <div className="marquee-content">

          <span>PYTHON</span>
          <i>✦</i>

          <span>DJANGO</span>
          <i>✦</i>

          <span>REACT</span>
          <i>✦</i>

          <span>JAVASCRIPT</span>
          <i>✦</i>

          <span>SQL</span>
          <i>✦</i>

          <span>DATA SCIENCE</span>
          <i>✦</i>

          <span>DSA</span>
          <i>✦</i>

        </div>

      </div>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-grid">

          <div className="about-heading">

            <p className="eyebrow">
              A LITTLE ABOUT ME
            </p>

            <h2>
              Developer by
              <span> curiosity.</span>
            </h2>

          </div>

          <div className="about-description">

            <p>
              I'm a Computer Science graduate interested in
              building useful software applications and
              continuously improving my development skills.
            </p>

            <p>
              My primary focus is Python Full Stack development,
              especially building web applications using Django,
              React and JavaScript.
            </p>

            <p>
              Alongside development, I practice Data Structures
              and Algorithms and explore Data Science and
              Machine Learning.
            </p>

            <div className="about-highlight">

              <div>
                <strong>350+</strong>
                <span>LeetCode Problems</span>
              </div>

              <div>
                <strong>100</strong>
                <span>Day Coding Streak</span>
              </div>

              <div>
                <strong>9.3</strong>
                <span>Engineering CGPA</span>
              </div>

            </div>

          </div>

        </div>

      </section>
      


      {/* ================= SKILLS ================= */}

      <section id="skills" className="dark-section">

        <div className="section">

          <div className="section-label light-label">
            <span>02</span>
            SKILLS
          </div>

          <div className="section-heading">

            <div>
              <p className="eyebrow blue-eyebrow">
                WHAT I WORK WITH
              </p>

              <h2>
                My technical
                <span> toolkit.</span>
              </h2>
            </div>

            <p>
              Technologies I use to build, learn and
              experiment with different ideas.
            </p>

          </div>


          <div className="skills-container">

            {skills.map((skill, index) => (

              <div className="skill-item" key={skill.name}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-info">

                  <h3>
                    {skill.name}
                  </h3>

                  <p>
                    {skill.category}
                  </p>

                </div>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-label">
          <span>03</span>
          PROJECTS
        </div>

        <div className="section-heading">

          <div>
            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>
          </div>

          <p>
            Projects created while learning full stack
            development and applying concepts to real
            applications.
          </p>

        </div>


        <div className="project-list">

          {projects.map((project) => (

            <article className="modern-project" key={project.number}>

              <div className="project-top">

                <span className="project-count">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <div className="project-main">

                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>


                <div className="project-details">

                  <div>

                    <p className="detail-label">
                      KEY FEATURES
                    </p>

                    {project.features.map((feature) => (

                      <div className="feature-row" key={feature}>
                        <span>✓</span>
                        {feature}
                      </div>

                    ))}

                  </div>


                  <div>

                    <p className="detail-label">
                      BUILT WITH
                    </p>

                    <div className="project-tags">

                      {project.technologies.map((technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="dark-section">

        <div className="section">

          <div className="section-label light-label">
            <span>04</span>
            EXPERIENCE
          </div>

          <div className="section-heading">

            <div>
              <p className="eyebrow blue-eyebrow">
                MY JOURNEY
              </p>

              <h2>
                Experience that
                <span> shaped me.</span>
              </h2>
            </div>

          </div>


          <div className="timeline">

            {experiences.map((experience, index) => (

              <div className="timeline-item" key={experience.company}>

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-content">

                  <div className="timeline-date">
                    {experience.year}
                  </div>

                  <p className="timeline-company">
                    {experience.company}
                  </p>

                  <h3>
                    {experience.role}
                  </h3>

                  <p className="timeline-description">
                    {experience.description}
                  </p>

                  <div className="experience-tags">

                    {experience.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section id="education" className="section">

        <div className="section-label">
          <span>05</span>
          EDUCATION
        </div>

        <div className="education-heading">

          <p className="eyebrow">
            ACADEMIC JOURNEY
          </p>

          <h2>
            Where I
            <span> learned.</span>
          </h2>

        </div>


        <div className="education-grid">

          <div className="education-card featured-education">

            <div className="education-year">
              2022 — 2026
            </div>

            <p>
              SHREEDEVI INSTITUTE OF TECHNOLOGY
            </p>

            <h3>
              Bachelor of Engineering
            </h3>

            <span>
              Computer Science · Mangalore
            </span>

            <div className="education-score">
              <small>CGPA</small>
              <strong>9.3</strong>
            </div>

          </div>


          <div className="education-card">

            <div className="education-year">
              2020 — 2022
            </div>

            <p>
              MHNG PU COLLEGE
            </p>

            <h3>
              PCMB
            </h3>

            <span>
              Sirsi
            </span>

            <div className="education-score">
              <small>PERCENTAGE</small>
              <strong>92.16%</strong>
            </div>

          </div>


          <div className="education-card">

            <div className="education-year">
              2019 — 2020
            </div>

            <p>
              SHREE GAJANANA HIGH SCHOOL
            </p>

            <h3>
              SSLC
            </h3>

            <span>
              Sirsi
            </span>

            <div className="education-score">
              <small>PERCENTAGE</small>
              <strong>89.44%</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section id="certifications"className="certificate-section">

        <div className="section">

          <div className="section-label light-label">
            <span>06</span>
            CERTIFICATIONS
          </div>

          <div className="section-heading">

            <div>
              <p className="eyebrow blue-eyebrow">
                CONTINUOUS LEARNING
              </p>

              <h2>
                Always
                <span> learning.</span>
              </h2>
            </div>

          </div>


          <div className="certification-grid">

            {certifications.map((certificate, index) => (

              <div className="certificate" key={certificate.title}>

                <div className="certificate-number">
                  0{index + 1}
                </div>

                <div>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.organization}
                  </p>

                </div>

                <span>
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="contact-content">

          <p className="eyebrow">
            HAVE A PROJECT OR OPPORTUNITY?
          </p>

          <h2>
            Let's create
            <br />
            <span>something great.</span>
          </h2>

          <p className="contact-text">
            I'm always interested in learning, building
            and working on meaningful projects.
          </p>

          <a
            href="mailto:pavitravaidya844@gmail.com"
            className="email-button"
          >
            pavitravaidya844@gmail.com
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <span>P</span>avitra.
            </a>

            <p>
              Python Full Stack Developer
              <br />
              building one project at a time.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              NAVIGATION
            </h4>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>

          </div>


          <div className="footer-column">

            <h4>
              CONNECT
            </h4>

            <a
              href="https://github.com/PavitraVaidya"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/pavitra-vaidya/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://leetcode.com/u/Pavitra_sv/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode ↗
            </a>

          </div>


          <div className="footer-column">

            <h4>
              CONTACT
            </h4>

            <a href="mailto:pavitravaidya844@gmail.com">
              Email ↗
            </a>

            <a href="tel:+918296391383">
              +91 82963 91383
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Pavitra Vaidya
          </span>

          <span>
            Designed & built with React
          </span>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;