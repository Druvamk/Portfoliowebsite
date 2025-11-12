import {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type JSX,
} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Type definitions
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("-99SYYeMV4P5r58pP");
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send("service_5g6ctxa", "template_2i9htj4", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "mkdruva12@gmail.com",
      });

      console.log("Email sent successfully:", result.text);

      // Clear form immediately after success
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Show success message
      setStatus("✨ Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus(
        "❌ Failed to send message. Please try again or email me directly."
      );
    } finally {
      setLoading(false);
      // Clear status message after 6 seconds
      setTimeout(() => setStatus(""), 6000);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: "📧",
      title: "Email",
      value: "mkdruva12@gmail.com",
      link: "mailto:mkdruva12@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 8792463088",
      link: "tel:+918792463088",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/Druvamk",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/druva-mk-a70319226/",
      color: "#0077b5",
    },
    {
      name: "Email",
      icon: "✉️",
      url: "mailto:mkdruva12@gmail.com",
      color: "#ea4335",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="animated-bg"></div>
      <div className="contact-container">
        <div className="section-header">
          <span className="badge">Get In Touch</span>
          <h2>Contact Me</h2>
          <p className="section-description">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3>Let's Connect</h3>
              <p className="info-description">
                I'm currently available for freelance work and full-time
                opportunities. If you have a project or just want to say hi,
                feel free to reach out!
              </p>

              <div className="contact-details">
                {contactInfo.map((info: ContactInfo, index: number) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-text">
                      <span className="contact-title">{info.title}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social: SocialLink, index: number) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.name}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={loading}
                  className={loading ? "loading-input" : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={loading}
                  className={loading ? "loading-input" : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  disabled={loading}
                  className={loading ? "loading-input" : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  disabled={loading}
                  className={loading ? "loading-input" : ""}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="btn-icon spinner">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status && (
                <div
                  className={`status-message ${
                    status.includes("❌") ? "error" : "success"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
