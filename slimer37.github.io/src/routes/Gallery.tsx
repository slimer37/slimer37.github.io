import './gallery.css'

function Gallery() {
  document.title = "Gallery"
  
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>3D Art Gallery</h1>
      <h3 style={{ textAlign: 'center' }}>Click on any square to view the original image.</h3>
      <div className="gallery-grid">
        <a href="mobboss.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/mobboss.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Pokémon Mafia</div>
        </a>
        <a href="boxcutter.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/boxcutter.jpg)" }}><p><q>Boxcutter</q> Boss</p></a>
        <a href="gramophone.png" className="art-tile" style={{ backgroundImage: "url(/gallery/gramophone.png)", backgroundSize: '120%' }}>Gramophone</a>
        <a href="spacerotate.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/spacerotate.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Personality Cores</div>
        </a>
        <a href="venom.png" className="art-tile" style={{ backgroundImage: "url(/gallery/venom.png)" }}>Venom</a>
        <a href="room.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/room.jpg)" }}>Bedroom Replica</a>
        <a href="burgerlooped.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/burgerlooped.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Burger Place</div>
        </a>
        <a href="skullresult.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/skullresult.jpg)" }}>Low-Poly T-Rex Skull</a>
        <a href="gladosdone.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/gladosdone.jpg)" }}>GLaDOS</a>
        <a href="bigdipper.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/bigdipper.jpg)" }}>Big Dipper</a>
        <a href="opensign.png" className="art-tile" style={{ backgroundImage: "url(/gallery/opensign.png)" }}>Open Sign</a>
        <a href="motiontrack.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/motiontrack.mp4" type="video/mp4" />
          </video>
          <div className="over-video">VFX Test</div>
        </a>
        <a href="factorio.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/factorio.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Factorio Inserters</div>
        </a>
        <a href="firelegwalk.mp4" className="art-tile">
          <video controls loop muted>
            <source src="gallery/firelegwalk.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Fireleg (Click to play)</div>
        </a>
        <a href="buildingnight.png" className="art-tile" style={{ backgroundImage: "url(/gallery/buildingnight.png)" }}>City Corner Building</a>
        <a href="funky.jpg" className="art-tile" style={{ backgroundImage: "url(/gallery/funky.jpg)" }}><q>Funky Abstract</q></a>
        <a href="ship.mp4" className="art-tile">
          <video autoPlay loop muted>
            <source src="gallery/ship.mp4" type="video/mp4" />
          </video>
          <div className="over-video">Ship</div>
        </a>
        <a href="lemon.png" className="art-tile" style={{ backgroundImage: "url(/gallery/lemon.png)" }}>Combustible Lemon</a>
      </div>
    </>
  )
}

export default Gallery
