import React from 'react'

export default function Footer() {
  return (
    <div className="footer-section">
      {/* Footer Column 1 */}
      <div className="container footer-container">
        <div className="col-lg-4 col-md-6 footer-logo">
          <a href="/" className="footer-social-media-icon">
            <svg className="logoFooter" alt="logo footer"></svg>
          </a>
        </div>
        {/* Footer Column 2 */}
        <div className="col-lg-4 col-md-6 footer-subsection">
          <h3 className="footer-subsection-title">
            <a href="#contact"  className="contact-footer">Contacto</a>
          </h3>
        </div>
        {/* Footer Column 3 */}
        <div className="col-lg-4 col-md-6 footer-subsection">
          <div className="footer-subsection-2-2">
            <div className="footer-social-media-icons-section footer-subsection-title">
              <a href="https://www.linkedin.com/company/minerva-consultora-rioplatense/about/" className="footer-social-media-icon" target="blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER CREDITS */}
      <div className="footer-credits">
        <p>
          © 2020 Crminerva™. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
