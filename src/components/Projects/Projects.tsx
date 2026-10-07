import "./Projects.css";
import pizzaImg from "../../assets/pizzaapp.png";
import farAwayImg from "../../assets/faraway.png";
import foodieImg from "../../assets/foodie-app.png";
import jwwaImg from "../../assets/jwwa.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "JWWA - Water Management System",
      description:
        "An enterprise web application developed for the Japan Water Works Association (JWWA). Worked across multiple modules to build responsive interfaces, integrate REST APIs, handle data-driven workflows, and implement file download functionality.",
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS",
        "REST APIs",
      ],
      features: [
        "Water Quality module",
        "Water Facilities module",
        "Search System",
        "Water Statistics",
        "REST API integration",
        "File download support",
        "Frontend event logging",
        "Unit testing with Jest & RTL",
      ],
      github: null,
      live: null,
      image: jwwaImg,
      professional: true,
    },

    {
      id: 2,
      title: "Zonexa Admin Panel",
      description:
        "A responsive admin panel for managing users, dashboards, authentication, and API-driven workflows. Developed reusable UI components and implemented secure authentication and protected application routes.",
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS",
        "shadcn/ui",
        "REST APIs",
      ],
      features: [
        "User management",
        "Admin dashboard",
        "Mobile OTP login",
        "User & admin onboarding",
        "Guest login",
        "Forgot password",
        "Password reset",
        "Protected routes",
      ],
      github: null,
      live: null,
      professional: true,
    },

    {
      id: 3,
      title: "Fast React Pizza Co.",
      description:
        "A full-featured pizza ordering application built with React and Redux. Users can browse the menu, add pizzas to cart, and place orders with geolocation-based address suggestions.",
      tech: [
        "React",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "API Integration",
      ],
      features: [
        "Pizza menu from API",
        "Shopping cart system",
        "Geolocation address",
        "Order tracking",
      ],
      github: "https://github.com/Druvamk/pizza-application",
      live: "https://pizza-application-druva.netlify.app/",
      image: pizzaImg,
    },

    {
      id: 4,
      title: "Far Away Travel App",
      description:
        "A smart travel packing list application that helps travelers organize their items. Users can add items, mark them as packed, sort the list, and track packing statistics with local storage persistence.",
      tech: [
        "React",
        "React Hooks",
        "Local Storage",
        "CSS3",
        "Responsive Design",
      ],
      features: [
        "Add/remove items",
        "Pack tracking",
        "Sort by status",
        "Local storage",
      ],
      github: "https://github.com/yourusername/faraway-app",
      live: "https://far-away-appliaction.netlify.app/",
      image: farAwayImg,
    },

    {
      id: 5,
      title: "Foodie Restaurant App",
      description:
        "A modern, fully responsive restaurant website featuring a clean UI/UX design. Users can explore menu items, chef specialties, photo galleries, and smooth animations.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "Modern UI/UX",
      ],
      features: [
        "Responsive navbar",
        "Animated hero section",
        "Menu showcase",
        "Photo gallery",
      ],
      github: "https://github.com/yourusername/foodie-restaurant",
      live: "https://fastidious-sable-9db804.netlify.app/",
      image: foodieImg,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="animated-bg"></div>

      <div className="projects-container">
        <div className="section-header">
          <span className="badge">Portfolio</span>

          <h2>Featured Projects</h2>

          <p className="section-description">
            A collection of professional and personal projects showcasing my
            experience in React.js, Next.js, TypeScript, API integration,
            responsive UI development, and modern frontend architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />

                <div className="image-overlay"></div>

                {project.professional && (
                  <span className="professional-badge">
                    Professional Project
                  </span>
                )}
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="features">
                  <h4>Key Features</h4>

                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn-project btn-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">📂</span>
                      View Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      className="btn-project btn-live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">🚀</span>
                      Live Demo
                    </a>
                  )}

                  {project.professional && (
                    <span className="professional-note">
                      Enterprise Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
