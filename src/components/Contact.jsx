import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone, LuGlobe } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to connect to a backend or email service here (e.g. EmailJS, Formspree)
    console.log("Submitted:", formData);
    alert("Message envoyé!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Contact</h2>

            <div className="info-item">
              <CiLocationOn />
              <div>
                <h4>Adresse</h4>
                <p>Constantine, Algérie 25000</p>
              </div>
            </div>

            <div className="info-item">
              <LuPhone />
              <div>
                <h4>Téléphone</h4>
                <p>+213559918231</p>
              </div>
            </div>

            <div className="info-item">
              <AiOutlineMail />
              <div>
                <h4>Email</h4>
                <p>abmbeevenom@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <LuGlobe />
              <div>
                <h4>Site Web</h4>
                <p>www.abmbeevenom.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2 className="section-title">Contactez-nous</h2>
            <form onSubmit={handleSubmit}>
              <label>Nom & Prénom</label>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Adresse email</label>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Sujet</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="partnership">Partenariat</option>
                <option value="products">Produits</option>
                <option value="services">Services</option>
                <option value="other">Autre</option>
              </select>

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="btn">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
