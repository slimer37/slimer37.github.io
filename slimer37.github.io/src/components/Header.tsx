import { NavLink, Link } from 'react-router-dom'

import './Header.css'

function NavButtonStyle(isActive: boolean) {
  return "nav-btn button " + (isActive ? "active" : "");
}

function Header() {
  window.addEventListener('scroll', shrinkWhenScrolled);

  return (
    <header id="header">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="header-group">
        <Link to="/" className="scaled-logo">
          <img src="/src/assets/images/logo.png" style={{ height: "100%" }} />
        </Link>
        <nav className="nav-btn-group">
          <NavLink className={({ isActive }) => NavButtonStyle(isActive)} to="/blog">Blog</NavLink>
          <NavLink className={({ isActive }) => NavButtonStyle(isActive)} to="/portfolio">Portfolio</NavLink>
          <a className="nav-btn button" href="https://slimer37.itch.io">Itch&nbsp;<span className="material-symbols-outlined">
            arrow_right_alt
          </span></a>
        </nav>
      </div>
    </header>
  )
}

function shrinkWhenScrolled() {
  const scrollThreshold = 50;
  let header = document.getElementById("header")!;

  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    header.className = "shrunk-header";
  } else {
    header.className = "";
  }
}

export default Header;