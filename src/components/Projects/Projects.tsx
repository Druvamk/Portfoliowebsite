import "./Projects.css";
import pizzaImg from "../../assets/pizzaapp.png";
import farAwayImg from "../../assets/faraway.png";
import foodieImg from "../../assets/foodie-app.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fast React Pizza Co.",
      description:
        "A full-featured pizza ordering application built with React and Redux. Users can browse the menu, add pizzas to cart, and place orders with geolocation-based address suggestions - no login required!",
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
      id: 2,
      title: "Far Away Travel App",
      description:
        "A smart travel packing list application that helps travelers organize their items. Features include adding items, marking as packed, sorting options, and real-time packing statistics with local storage persistence.",
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
      id: 3,
      title: "Foodie Restaurant App",
      description:
        "A modern, fully responsive restaurant website featuring stunning UI/UX design. Browse menu items, explore chef specialties, view photo gallery, and experience smooth animations with React and Tailwind CSS.",
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
            Modern React applications showcasing my frontend development skills
            and creative problem-solving abilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with overlay */}
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="image-overlay"></div>
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
                  <a
                    href={project.github}
                    className="btn-project btn-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">📂</span> View Code
                  </a>
                  <a
                    href={project.live}
                    className="btn-project btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">🚀</span> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
