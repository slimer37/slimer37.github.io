import './Footer.css'

import face from "../assets/images/easter-face.png"

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-column">
        <p className="footer-item">Site by Alfred Roy M<img src={face} style={{maxHeight: '30pt', marginBottom: '-15px'}} /></p>
        <p className="footer-item">
          Contact:&nbsp;
          <a className="footer-link" href="mailto:slimer37dev@gmail.com">slimer37dev@gmail.com</a>
        </p>
      </div>
      <div className="footer-column">
        <p className="footer-item">
          Hosted on&nbsp;
          <a className="footer-link" href="https://github.com/slimer37/slimer37.github.io">GitHub</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;