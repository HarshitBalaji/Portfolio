// Contact page with direct links plus a lightweight email-draft form.
import { useState } from "react";
import "../styles/contact.css";
import { collaborationPoints, contactLinks, profile } from "../data/portfolio";

function Contact_Me() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Generic controlled-input handler so every field uses the same update logic.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  // Build a mailto link so the user's email client opens with the form content filled in.
  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || `Hello ${profile.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:saiharshitbalaji@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-section contact-page">
      <article className="contact-card">
        <span className="eyebrow">Contact</span>
        <h1>Let&apos;s talk about what we can build.</h1>
        <p className="section-copy">
          I enjoy conversations around full-stack applications, engineering productivity, automation, and robotics systems. If your team is building something meaningful, I&apos;d love to hear about it.
        </p>

        <ul className="contact-list">
          {/* Contact rows support either a clickable href or plain text when no link exists. */}
          {contactLinks.map((item) => (
            <li key={item.label}>
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="glass-card availability-card">
          <h2>Best fit collaborations</h2>
          <ul className="project-detail-list">
            {collaborationPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </article>

      <article className="contact-card form-card">
        <span className="eyebrow">Send a note</span>
        <h2>Reach out directly</h2>
        <form className="message-form" onSubmit={handleSubmit}>
          {/* Keep field names aligned with formData keys. */}
          <label>
            <span>Name</span>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            <span>Subject</span>
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project, role, or collaboration idea" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
          </label>
          <button className="send-btn" type="submit">Open Email Draft</button>
        </form>
      </article>
    </section>
  );
}

export default Contact_Me;
