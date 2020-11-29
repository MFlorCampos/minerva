import React, { useEffect, useState } from 'react'

const copy = [
  { title: 'Aseguramos el éxito y la continuidad', bg: '/assets/images/banner2.jpg' },
  { title: 'Generamos vínculos para toda la vida', bg: '/assets/images/banner.jpg' },
]

export default function Hero() {
  const [bg, setBg] = useState(copy[0].bg)
  const [title, setTitle] = useState(copy[0].title)

  useEffect(() => {
    let flag = false;
    const interval = setInterval(() => {
      const cp = copy[flag ? 0 : 1]
      setBg(cp.bg)
      setTitle(cp.title)
      flag = !flag
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="header" style={{ backgroundImage: `url('${bg}')` }}>
      <div className="col-lg-8 header-title-section" >
        <h1 className="header-title" data-aos="zoom-in">Ideas y soluciones para empresas</h1>
        <p className="header-subtitle" data-aos="zoom-in">{title}</p>

        <div className="learn-more-btn-section">
          <a
            className="nav-link learn-more-btn btn-invert"
            href="#contact"
            data-aos="zoom-in"
          >
            Contactenos
          </a>
        </div>
      </div>
    </div>
  )
}