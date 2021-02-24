import React from 'react'

export default function Hero(props) { 
  const { copy } = props;
  console.log(props);
  return (
    copy.map( (e) => (
      <div className={`${e.class} header`} style={{ backgroundImage: `url('${e.bg}')` }}>
      <div className="col-lg-8 header-title-section" >
        <h1 className="header-title" data-aos="zoom-in">Ideas y soluciones para empresas</h1>
        <p className="header-subtitle" data-aos="zoom-in">{e.title}</p>

        <div className="learn-more-btn-section">
          <a
            className="nav-link learn-more-btn btn-invert"
            href="#contact"
            data-aos="zoom-in"
          >
            Contáctenos
          </a>
        </div>
      </div>
    </div>
    ))
  )
}