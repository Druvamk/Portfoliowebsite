import "./Experience.css";

export default function Experience() {
  const experience = {
    company: "Ivoyant Pvt Ltd",
    role: "Frontend Developer",
    duration: "November 2024 - October 2025",
    period: "1 Year",
    location: "Bengaluru, India",
    description:
      "Working as a Frontend Developer building responsive web applications with React, TypeScript, and modern UI libraries. Collaborating with backend developers to deliver full-stack solutions for enterprise clients.",
    projects: [
      {
        id: 1,
        name: "Case Management System",
        role: "Frontend Developer",
        description:
          "Developed a comprehensive case tracking and management application for workflow automation and client management.",
        technologies: [
          "React",
          "TypeScript",
          "Ant Design",
          "Redux Toolkit",
          "REST APIs",
        ],
        achievements: [
          "Built dynamic forms with validation using React Hook Form",
          "Implemented role-based access control for different user types",
          "Developed workflow automation features for case tracking",
          "Collaborated with backend team for API integration",
          "Created reusable UI components with Ant Design",
        ],
      },
      {
        id: 2,
        name: "IHRMS (HR Management System)",
        role: "Frontend Developer",
        description:
          "Developed an integrated HR management system for employee data management, attendance tracking, and leave management.",
        technologies: ["React", "TypeScript", "Ant Design", "Node.js", "MySQL"],
        achievements: [
          "Built employee portal with attendance tracking features",
          "Implemented leave management and approval workflows",
          "Developed dashboard with real-time HR analytics",
          "Integrated with backend APIs for data synchronization",
          "Created responsive UI for mobile and desktop devices",
        ],
      },
    ],
  };

  return (
    <section id="experience" className="experience-section">
      <div className="animated-bg"></div>
      <div className="experience-container">
        <div className="section-header">
          <span className="badge">Career</span>
          <h2>Work Experience</h2>
          <p className="section-description">
            Professional journey as a Frontend Developer building enterprise
            applications
          </p>
        </div>

        <div className="experience-card">
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
                style={{ animationDelay: `${index * 0.2}s` }}
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
      </div>
    </section>
  );
}
