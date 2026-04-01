import './Footer.css'

import face from "../assets/images/easter-face.png"

function EmailLink(address: string) {
  return <a className="footer-link" href={"mailto:" + address}>{address}</a>
}

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-column">
        <div className="footer-item">
          <span>Site by Alfred Roy M</span>
          <img src={face} style={{ maxHeight: '30pt', marginBottom: '-15px' }} />
        </div>
        <div className="footer-item">
          <b>Contact</b>
          <table style={{ borderCollapse: 'collapse' }}>
            <tr>
              <td>Primary:</td>
              <td>{EmailLink("alfredroym04@gmail.com")}</td>
            </tr>
            <tr>
              <td>Games/Support:</td>
              <td>{EmailLink("slimer37dev@gmail.com")}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="footer-column">
        <p className="footer-item">
          Hosted with&nbsp;
          <a className="footer-link" href="https://github.com/slimer37/slimer37.github.io">GitHub&nbsp;Pages</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;