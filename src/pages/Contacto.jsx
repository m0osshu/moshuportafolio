import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconSend, IconCheck, IconAlertCircle } from '@tabler/icons-react';
import Footer from '../components/molecules/Footer.jsx';
import '../styles/pages/Contacto.css';

const initialForm = { name: '', email: '', mensaje: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'El nombre es requerido';
    if (!formData.email.trim()) e.email = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Correo inválido';
    if (!formData.mensaje.trim()) e.mensaje = 'El mensaje es requerido';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSent(true);
    setFormData(initialForm);
    setErrors({});
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <div className="contact-page">
      <div className="contact-page__inner">

        <div className="contact-page__header">
          <motion.p
            className="contact-page__label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Contacto
          </motion.p>
          <motion.h1
            className="contact-page__title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.07 }}
          >
            Hablemos<span className="contact-page__dot">.</span>
          </motion.h1>
          <motion.p
            className="contact-page__subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.14 }}
          >
            ¿Tienes un proyecto en mente? Escríbeme.
          </motion.p>
        </div>

        {sent ? (
          <motion.div
            className="contact-page__success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <IconCheck size={24} strokeWidth={1.75} />
            <p>Mensaje enviado. Te responderé pronto.</p>
            <button className="contact-page__btn" onClick={() => setSent(false)}>
              Enviar otro
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="contact-page__form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="contact-page__field">
              <label className="contact-page__field-label" htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                className={`contact-page__input ${errors.name ? 'contact-page__input--error' : ''}`}
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange('name')}
              />
              {errors.name && (
                <span className="contact-page__error">
                  <IconAlertCircle size={13} strokeWidth={1.75} />
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-page__field">
              <label className="contact-page__field-label" htmlFor="email">Correo</label>
              <input
                id="email"
                type="email"
                className={`contact-page__input ${errors.email ? 'contact-page__input--error' : ''}`}
                placeholder="tuemail@ejemplo.com"
                value={formData.email}
                onChange={handleChange('email')}
              />
              {errors.email && (
                <span className="contact-page__error">
                  <IconAlertCircle size={13} strokeWidth={1.75} />
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-page__field">
              <label className="contact-page__field-label" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                rows={5}
                className={`contact-page__input contact-page__textarea ${errors.mensaje ? 'contact-page__input--error' : ''}`}
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange('mensaje')}
              />
              {errors.mensaje && (
                <span className="contact-page__error">
                  <IconAlertCircle size={13} strokeWidth={1.75} />
                  {errors.mensaje}
                </span>
              )}
            </div>

            <button className="contact-page__btn" onClick={handleSubmit}>
              <IconSend size={14} strokeWidth={1.75} />
              Enviar mensaje
            </button>
          </motion.div>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default Contact;