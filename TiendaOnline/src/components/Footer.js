import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3 style={footerHeadingStyle}>Contáctanos</h3>
          <p><FaPhoneAlt /> +57 1 234 5678</p>
          <p><FaEnvelope /> contacto@midulceonline.com</p>
          <p><FaMapMarkerAlt /> Calle Ejemplo 123, Bogotá, Colombia</p>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerHeadingStyle}>Síguenos</h3>
          <p>
            <a href="https://facebook.com" style={socialIconStyle}><FaFacebookF /></a>
            <a href="https://twitter.com" style={socialIconStyle}><FaTwitter /></a>
            <a href="https://instagram.com" style={socialIconStyle}><FaInstagram /></a>
          </p>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerHeadingStyle}>Sobre Nosotros</h3>
          <p>Descubre la tradición y calidad de nuestros dulces colombianos. Comprometidos con la excelencia y el sabor auténtico.</p>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerHeadingStyle}>Información Adicional</h3>
          <p><a href="/politicas-de-privacidad">Políticas de Privacidad</a></p>
          <p><a href="/terminos-y-condiciones">Términos y Condiciones</a></p>
          <p><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>&copy; {new Date().getFullYear()} Mi Dulce Online. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const footerSectionStyle = {
  flex: '1 1 200px',
  margin: '10px',
};

const footerHeadingStyle = {
  marginBottom: '10px',
  fontSize: '1.2em',
};

const socialIconStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

const footerBottomStyle = {
  textAlign: 'center',
  padding: '10px 20px',
  borderTop: '1px solid #444',
};

export default Footer;
