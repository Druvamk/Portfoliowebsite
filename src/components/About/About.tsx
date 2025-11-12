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
          <span className="badge">Frontend Developer</span>
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Druva MK</span> — a passionate
            Front-End Developer with experience in building responsive and
            interactive web applications using <strong>React.js</strong>,
            <strong> TypeScript</strong>, and <strong>JavaScript (ES6+)</strong>
            . I love crafting clean, reusable UI components and exploring
            performance optimization techniques.
          </p>

          <p>
            Currently, I'm focused on improving user experiences and learning
            advanced React patterns to build scalable front-end architectures.
          </p>

          <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
              <li>
                <span className="skill-icon">⚛️</span> React.js
              </li>
              <li>
                <span className="skill-icon">📘</span> TypeScript
              </li>
              <li>
                <span className="skill-icon">⚡</span> JavaScript (ES6+)
              </li>
              <li>
                <span className="skill-icon">🔄</span> Redux
              </li>
              <li>
                <span className="skill-icon">▲</span> Next.js
              </li>
              <li>
                <span className="skill-icon">🎨</span> HTML / CSS
              </li>
              <li>
                <span className="skill-icon">🔧</span> Git & Github
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
