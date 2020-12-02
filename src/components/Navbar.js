/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import NavbarItem from './NavbarItem'
// https://via.placeholder.com/300x150


function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar fixed-top navbar-expand-lg navbar-header navbar-mobile"
    >
      <div className="navbar-container container">
        {/* LOGO */}
        <div className="navbar-brand">
          <a className="navbar-brand-logo" href="/#">
            <svg className="logo-header" width="155px" alt="minerva logo"></svg>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <ul className="navbar-nav menu-navbar-nav">
              <NavbarItem
                number={"01"}
                title={"Inicio"}
                link={"/#top"}
              />
              <NavbarItem
                number={"02"}
                title={"Quienes Somos"}
                link={"/#nosotros"}
              />
              <NavbarItem
                number={"03"}
                title={"Mision"}
                link={"/#mision"}
              />
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <p className="nav-link-number">04</p>
                  <p className="nav-link-menu">Servicios</p>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/contaduria">Contabilidad</Link>
                  <Link className="dropdown-item" to="/finanzas">Finanzas</Link>
                  <Link className="dropdown-item" to="/tecnologia">Tecnología en alimentos</Link>
                  <Link className="dropdown-item" to="/imagen">Imagen Corporativa</Link>
                </div>
              </li>
            
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link smooth className="nav-link learn-more-btn" to="#contact">
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
