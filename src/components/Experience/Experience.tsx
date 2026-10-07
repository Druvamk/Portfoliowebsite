import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Indo-Sakura Software",
      role: "Software Engineer",
      duration: "February 2026 - Present",
      period: "Present",
      location: "Bengaluru, India",
      description:
        "Working as a Software Engineer specializing in React.js, Next.js, and TypeScript, developing responsive and scalable enterprise web applications. Working across JWWA and Zonexa projects with a focus on API integration, reusable UI components, authentication, testing, and frontend functionality.",
      projects: [
        {
          id: 1,
          name: "JWWA - Japan Water Works Association",
          role: "Software Engineer",
          description:
            "Contributing to an enterprise web application across multiple water management modules, developing responsive interfaces and integrating REST APIs to support data-driven workflows.",
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Tailwind CSS",
            "REST APIs",
          ],
          achievements: [
            "Worked across Water Quality, Water Facilities, Search System, Water Statistics, User Settings, and Administration modules",
            "Integrated REST APIs to fetch, process, filter, and display application data",
            "Implemented file download functionality supporting PDF, XLS, XLSX, TXT, CSV, and ZIP formats",
            "Implemented frontend event logging for page loads, API requests, user interactions, and application events",
            "Performed unit testing using Jest and React Testing Library",
            "Investigated and resolved API integration, UI, validation, responsive design, and functional issues",
            "Performed scenario-based testing and collaborated with backend and QA teams to resolve application issues",
          ],
        },
        {
          id: 2,
          name: "Zonexa Admin Panel",
          role: "Software Engineer",
          description:
            "Developed and enhanced an admin panel for user management, dashboards, authentication, and API-driven workflows with reusable and responsive frontend components.",
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Tailwind CSS",
            "shadcn/ui",
            "REST APIs",
          ],
          achievements: [
            "Developed user management and dashboard features for the admin panel",
            "Implemented mobile OTP login, user and admin onboarding, guest login, forgot password, and password reset flows",
            "Implemented protected routes and authentication-based navigation",
            "Built reusable DataTable, Form, Dialog, Card, Sidebar, and Header components",
            "Integrated REST APIs for user and dashboard-related functionality",
            "Implemented responsive interfaces using Tailwind CSS and shadcn/ui",
            "Worked on API debugging, validation, UI improvements, and functional issue resolution",
          ],
        },
      ],
    },

    {
      id: 2,
      company: "iVoyant Pvt Ltd",
      role: "Frontend Developer",
      duration: "September 2024 - October 2025",
      period: "1 Year 2 Months",
      location: "Bengaluru, India",
      description:
        "Worked as a Frontend Developer building responsive and scalable web applications using React.js, Next.js, TypeScript, JavaScript, Redux Toolkit, RTK Query, Ant Design, Tailwind CSS, and SCSS.",
      projects: [
        {
          id: 1,
          name: "Case Manager",
          role: "Frontend Developer",
          description:
            "Developed frontend features for a case management application, including dashboards, case creation, case analysis, case assignment, and data visualization.",
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "RTK Query",
            "Ant Design",
            "REST APIs",
          ],
          achievements: [
            "Developed dashboard interfaces for case management and analysis",
            "Built interactive donut and bar charts using Ant Design",
            "Implemented case creation, assignment, and management workflows",
            "Integrated REST APIs using Redux Toolkit and RTK Query",
            "Collaborated with UX designers and backend developers to implement application requirements",
            "Resolved API failures, CORS issues, UI alignment problems, and frontend performance issues",
          ],
        },
        {
          id: 2,
          name: "iHRMS - Human Resource Management System",
          role: "Frontend Developer",
          description:
            "Developed frontend features for employee profile management, leave management, and reporting dashboards.",
          technologies: [
            "React.js",
            "TypeScript",
            "Ant Design",
            "React Context API",
            "REST APIs",
          ],
          achievements: [
            "Developed employee profile management features",
            "Implemented leave management workflows",
            "Built reporting and dashboard interfaces",
            "Integrated frontend components with backend REST APIs",
            "Used React Context API for application-level state management",
            "Resolved state update and UI issues across frontend components",
          ],
        },
        {
          id: 3,
          name: "Community Central",
          role: "Frontend Developer",
          description:
            "Contributed to a modular frontend application using modern React architecture and microfrontend technologies.",
          technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Ant Design",
            "SCSS",
            "React Router",
            "RTK Query",
            "Module Federation",
          ],
          achievements: [
            "Developed reusable and responsive React components",
            "Worked with React Router for application navigation",
            "Integrated APIs using RTK Query",
            "Worked with Module Federation for microfrontend architecture",
            "Used Ant Design and SCSS for consistent UI development",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="animated-bg"></div>

      <div className="experience-container">
        <div className="section-header">
          <span className="badge">Career</span>

          <h2>Work Experience</h2>

          <p className="section-description">
            My professional journey building modern, scalable, and
            enterprise-grade frontend applications
          </p>
        </div>

        {experiences.map((experience, experienceIndex) => (
          <div
            key={experience.id}
            className="experience-card"
            style={{
              animationDelay: `${experienceIndex * 0.2}s`,
            }}
          >
            <div className="company-header">
              <div className="company-info">
                <h3 className="company-name">{experience.company}</h3>

                <p className="company-role">{experience.role}</p>

                <div className="company-meta">
                  <span className="duration">📅 {experience.duration}</span>

                  <span className="period">⏱️ {experience.period}</span>

                  <span className="location">📍 {experience.location}</span>
                </div>
              </div>
            </div>

            <p className="experience-description">{experience.description}</p>

            <div className="projects-worked">
              <h4 className="projects-title">Key Projects</h4>

              {experience.projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-item"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="project-header">
                    <h5 className="project-name">{project.name}</h5>

                    <span className="project-role">{project.role}</span>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <div className="achievements">
                    <h6>Key Contributions:</h6>

                    <ul>
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <span className="achievement-icon">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-used">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
