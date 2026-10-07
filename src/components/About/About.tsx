import "./About.css";
import profileImg from "../../assets/generated-image.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="animated-bg"></div>

      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Druva MK" />
            <div className="glow-effect"></div>
          </div>
        </div>

        <div className="about-text">
          <span className="badge">Software Engineer | React.js Developer</span>

          <h2>About Me</h2>

          <p>
            Hi, I'm <span className="highlight">Druva MK</span> — a Software
            Engineer and Front-End Developer with around{" "}
            <strong>2 years of experience</strong> building responsive,
            scalable, and user-friendly web applications using{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>JavaScript</strong>.
          </p>

          <p>
            Currently, I work at <strong>Indo-Sakura</strong>, where I
            contribute to enterprise applications including the{" "}
            <strong>JWWA (Japan Water Works Association)</strong> project and
            the <strong>Zonexa Admin Panel</strong>. My work includes REST API
            integration, authentication flows, reusable UI components, dashboard
            development, file downloads, frontend event logging, responsive UI
            development, and bug fixing.
          </p>

          <p>
            I enjoy building clean and maintainable frontend architectures,
            improving user experiences, writing reusable components, and
            collaborating with backend and QA teams to deliver reliable
            applications.
          </p>

          <div className="skills">
            <h3>Tech Stack</h3>

            <ul>
              <li>
                <span className="skill-icon">⚛️</span> React.js
              </li>
              <li>
                <span className="skill-icon">▲</span> Next.js
              </li>
              <li>
                <span className="skill-icon">📘</span> TypeScript
              </li>
              <li>
                <span className="skill-icon">⚡</span> JavaScript (ES6+)
              </li>
              <li>
                <span className="skill-icon">🔄</span> Redux Toolkit & RTK Query
              </li>
              <li>
                <span className="skill-icon">🎨</span> Tailwind CSS
              </li>
              <li>
                <span className="skill-icon">🧩</span> shadcn/ui
              </li>
              <li>
                <span className="skill-icon">🔗</span> REST API Integration
              </li>
              <li>
                <span className="skill-icon">🧪</span> Jest & React Testing
                Library
              </li>
              <li>
                <span className="skill-icon">🔧</span> Git & GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
