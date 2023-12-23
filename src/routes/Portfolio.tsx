import { Link } from 'react-router-dom'

import ccLogo from '../assets/portfolio/thumbs/cclogo.png'
import titleTile from '../assets/portfolio/thumbs/titletile.png'

import './portfolio.css'

function Portfolio() {
  document.title = "Portfolio"
  
  return (
    <>
      <div className="row">
        <a href="https://slimer37.itch.io/gtmk-jam-2021" className="project-tile emayhem-project-tile">
          GMTK 2021 Entry
          <img className="em-title pixel-art shadow" src={titleTile} />
          <div className="duppet-container">
            <div className="duppet pixel-art"></div>
          </div>
        </a>
        <Link to="/gallery" className="project-tile gallery-tile">
          3D Gallery
        </Link>
        <a href="https://slimer37.itch.io/early-store-game" className="project-tile cc-tile">
          Counter Chaos (Legacy)
          <img className="cc-title shadow" src={ccLogo} />
        </a>
      </div>
      <div className="row">
        <span className="project-tile wip-tile">
          SOME TWINSTICK
          <p className="wip">Work<br />In<br />Progress</p>
        </span>
        <span className="project-tile empty-tile">
          <div className="empty-tile-content">:)</div>
        </span>
      </div>
    </>
  )
}

export default Portfolio;