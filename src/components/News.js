/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function News() {
  return (
    <div className="blog-section">
      <div className="blog-section-right-bg">
        <img src="assets/images/blog-section-right-bg.png" />
      </div>
      <div className="blog-section-left-bg">
        <img src="assets/images/blog-section-left-bg.png" />
      </div>
      <div className="container blog-container">
        <div className="blog-title-section">
          <p className="blog-subtitle">Subtitulo</p>
          <h2 className="blog-title">Elementos destacados</h2>
        </div>
        <div className="blog-posts-section">
          <div className="col-lg-4 col-md-8 col-xs-10 blog-post-card-container">
            <div className="blog-post-card">
              <div className="blog-post-icon">
                <img src="https://via.placeholder.com/259x242" />
              </div>
              <h3 className="blog-post-title">Elemento 1</h3>
              <p className="blog-post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a className="blog-post-link" href="#news">
                Ver más
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-xs-10 blog-post-card-container">
            <div className="blog-post-card">
              <div className="blog-post-icon mb-4">
                <img src="https://via.placeholder.com/270x245" />
              </div>
              <h3 className="blog-post-title">Elemento 2</h3>
              <h4 className="blog-post-subtitle">subtitulo</h4>
              <p className="blog-post-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a className="nav-link learn-more-btn" href="#news">
                Ver más
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-xs-10 blog-post-card-container">
            <div className="blog-post-card">
              <div className="blog-post-icon">
                <img src="https://via.placeholder.com/259x242" />
              </div>
              <h3 className="blog-post-title">Elemento 3</h3>
              <p className="blog-post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a className="blog-post-link" href="#news">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
