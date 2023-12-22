import './Header.css'

function Header() {
  window.addEventListener('scroll', shrinkWhenScrolled);

  return (
    <header id="header">
      <div className="header-group">
        <a href="/" className="scaled-logo">
          <img src="/src/assets/images/logo.png" style={{ height: "100%" }} />
        </a>
        <nav className="nav-btn-group">
          <a className="nav-btn button" href="/blog">Blog</a>
          <a className="nav-btn button" href="/portfolio">Portfolio</a>
          <a className="nav-btn button" href="https://slimer37.itch.io">Games</a>
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