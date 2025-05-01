import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
         Mayen Sofia T. Mendoza. 3-ITB
        </p>
      </div>
    </footer>
  );
}

export default Footer;