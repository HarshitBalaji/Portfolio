// Contact page with direct links plus a lightweight email-draft form.
import { useState } from "react";
import "../styles/contact.css";
import { usePortfolio } from "../context/usePortfolio";

function Contact_Me() {
  const { content } = usePortfolio();
  const { contactLinks, contactPage, profile } = content;
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
        <span className="eyebrow">{contactPage.eyebrow}</span>
        <h1>{contactPage.title}</h1>
        <p className="section-copy">{contactPage.copy}</p>

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
      </article>

      <article className="contact-card form-card">
        <span className="eyebrow">{contactPage.noteEyebrow}</span>
        <h2>{contactPage.noteTitle}</h2>
        <form className="message-form" onSubmit={handleSubmit}>
          {/* Keep field names aligned with formData keys. */}
          <label>
            <span>{contactPage.name}</span>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            <span>{contactPage.email}</span>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            <span>{contactPage.subject}</span>
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder={contactPage.subjectPlaceholder} />
          </label>
          <label>
            <span>{contactPage.message}</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
          </label>
          <button className="send-btn" type="submit">{contactPage.submit}</button>
        </form>
      </article>
    </section>
  );
}

export default Contact_Me;
