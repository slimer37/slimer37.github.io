import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  window.addEventListener('scroll', shrinkWhenScrolled);

  return (
    <header id="header">
      <div className="header-group">
        <Link to="/" className="scaled-logo">
          <img src="/src/assets/images/logo.png" style={{ height: "100%" }} />
        </Link>
        <nav className="nav-btn-group">
          <Link className="nav-btn button" to="/blog">Blog</Link>
          <Link className="nav-btn button" to="/portfolio">Portfolio</Link>
          <Link className="nav-btn button" to="https://slimer37.itch.io">Games</Link>
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