import { useState } from "react";
import "../styles/Contact.css";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function Contact_Me() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with actual backend call / email API (e.g. EmailJS or FastAPI endpoint)
    console.log("Message Sent:", formData);
    alert("Thanks for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Card className="contact-card">
        <h3 style={{textAlign: 'justify'}}>Feel free to connect with me through any of the platforms below — I'm always open to meaningful conversations, collaborations, or sharing ideas over a good cup of coffee.</h3>
        <ul className="contact-list">
          <li><i className="pi pi-linkedin" /> <a href="https://www.linkedin.com/in/sai-harshit-b-4ba3411b5/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><i className="pi pi-envelope" /> <a href="mailto:saiharshitbalaji@gmail.com">saiharshitbalaji@gmail.com</a></li>
          <li><i className="pi pi-phone" /> +91 8431003590</li>
          <li><i className="pi pi-github" /> <a href="https://github.com/HarshitBalaji" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><i className="pi pi-twitter" /> <a href="https://x.com/harshit_balaji" target="_blank" rel="noreferrer">@harshit_balaji</a></li>
          <li><i className="pi pi-id-card" /> <a href="https://orcid.org/0009-0002-2376-5914" target="_blank" rel="noreferrer">ORCID ID</a></li>
        </ul>
      </Card>
    </div> 
  );
}

export default Contact_Me;
