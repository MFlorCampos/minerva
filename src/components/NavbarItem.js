import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const top = yCoordinate - 70; 
  window.scrollTo({ top, behavior: 'smooth' }); 
}

function NavbarItem({ number, title, link }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" smooth to={link} scroll={el => scrollWidthOffset(el)}>
        <p className="nav-link-number">{number}</p>
        <p className="nav-link-menu">{title}</p>
      </Link>
    </li>
  )
}

export default NavbarItem
